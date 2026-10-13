import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCopy, faLock } from "@fortawesome/free-solid-svg-icons";
import StoreLayout from "../../components/store/StoreLayout";
import AccountSidebar, { initialsOf } from "../../components/store/AccountSidebar";
import LoginModal from "../../assets/js/popup/login";
import { axiosInstance } from "../../assets/js/config/api";
import "../../assets/css/account.css";

const FILE_BASE = "https://files.fggroup.in/";
const MAX_PHOTO_MB = 5;
const hasAuth = () => !!localStorage.getItem("fg_group_user_authorization");

// The login flow creates accounts named "FG USER" until the customer sets a real name
const cleanName = (v, placeholder) => {
  const t = (v || "").trim();
  return t.toLowerCase() === placeholder ? "" : t;
};

const validate = (f) => {
  const e = {};
  if (!f.first_name.trim()) e.first_name = "Enter your first name";
  if (f.email.trim() && !/^\S+@\S+\.\S+$/.test(f.email.trim())) e.email = "Enter a valid email address";
  return e;
};

const Skeleton = () => (
  <div className="gz-acc-layout" aria-busy="true">
    <div className="gz-acc-side gz-skel" style={{ height: 320 }} />
    <div className="gz-acc-card gz-skel" style={{ height: 460 }} />
  </div>
);

function UserProfile() {
  const [authed, setAuthed] = useState(hasAuth);
  const [showLogin, setShowLogin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [photoBusy, setPhotoBusy] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState({});
  const [saved, setSaved] = useState({ first_name: "", last_name: "", email: "" });
  const [form, setForm] = useState({ first_name: "", last_name: "", email: "" });
  const [account, setAccount] = useState({ uid: "", mobile: "", photo: "", mobileVerified: false, emailVerified: false });
  const fileRef = useRef(null);

  const loadProfile = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("/account/profile");
      const data = response.data?.data;
      const u = data?.user || data;
      if (!u) throw new Error("No profile data");

      const values = {
        first_name: cleanName(u.first_name, "fg"),
        last_name: cleanName(u.last_name, "user"),
        email: (u.email || "").trim(),
      };
      setSaved(values);
      setForm(values);
      setAccount({
        uid: u.uid || "",
        mobile: u.mobile ? `${u.country_code || ""} ${u.mobile}`.trim() : "",
        photo: u.profile_image ? FILE_BASE + u.profile_image : "",
        mobileVerified: !!u.mobileVerified,
        emailVerified: !!u.emailVerified,
      });

      localStorage.setItem("user_info", JSON.stringify(data));
      window.dispatchEvent(new Event("user-info-updated"));
    } catch (error) {
      if (error?.response?.status === 401) {
        localStorage.removeItem("fg_group_user_authorization");
        setAuthed(false);
      } else {
        toast.error("Couldn't load your profile. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (authed) loadProfile();
    else setLoading(false);
  }, [authed, loadProfile]);

  const dirty = useMemo(
    () => ["first_name", "last_name", "email"].some((k) => form[k].trim() !== saved[k]),
    [form, saved],
  );

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!dirty || saving) return;

    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) return;

    setSaving(true);
    try {
      const res = await axiosInstance.post("/account/update-profile", {
        first_name: form.first_name.trim(),
        last_name: form.last_name.trim(),
        email: form.email.trim(),
      });
      if (!res.data?.data) throw new Error("Update failed");
      toast.success("Profile updated");
      await loadProfile();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Couldn't update your profile. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const onPhoto = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    if (!file.type.startsWith("image/")) return toast.error("Please choose an image file");
    if (file.size > MAX_PHOTO_MB * 1024 * 1024) return toast.error(`Photo must be under ${MAX_PHOTO_MB} MB`);

    setPhotoBusy(true);
    try {
      const body = new FormData();
      body.append("files", file);
      const upload = await axiosInstance.post("/file-upload", body);
      const key = upload.data?.data?.fileURLs?.[0];
      if (!key) throw new Error("Upload failed");
      await axiosInstance.post("/account/update-profile", { profile_image: key });
      setAccount((a) => ({ ...a, photo: FILE_BASE + key }));
      window.dispatchEvent(new Event("user-info-updated"));
      toast.success("Profile photo updated");
    } catch (error) {
      toast.error("Couldn't upload your photo. Please try again.");
    } finally {
      setPhotoBusy(false);
    }
  };

  const removePhoto = async () => {
    setPhotoBusy(true);
    try {
      await axiosInstance.post("/account/update-profile", { profile_image: null });
      setAccount((a) => ({ ...a, photo: "" }));
      toast.success("Profile photo removed");
    } catch (error) {
      toast.error("Couldn't remove your photo. Please try again.");
    } finally {
      setPhotoBusy(false);
    }
  };

  const copyId = async () => {
    try {
      await navigator.clipboard.writeText(account.uid);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      toast.info(`Your ID: ${account.uid}`);
    }
  };

  const displayName = `${saved.first_name} ${saved.last_name}`.trim();

  if (!authed) {
    return (
      <StoreLayout title="My Profile">
        <div className="gz-container">
          <div className="gz-login-gate">
            <div className="gz-login-icon" aria-hidden="true">👤</div>
            <h1>Log in to view your profile</h1>
            <p>Log in to manage your details and see your orders.</p>
            <button className="gz-btn-checkout" onClick={() => setShowLogin(true)}>
              Login / Sign up
            </button>
            <Link to="/shop" className="gz-link-btn mt-3 d-inline-block">
              ← Continue shopping
            </Link>
          </div>
        </div>
        {showLogin && (
          <LoginModal
            onClose={() => setShowLogin(false)}
            onLoginSuccess={() => {
              setShowLogin(false);
              setAuthed(true);
              window.dispatchEvent(new Event("user-info-updated"));
            }}
          />
        )}
      </StoreLayout>
    );
  }

  return (
    <StoreLayout title="My Profile">
      <div className="gz-container">
        <div className="gz-acc-head">
          <h1>My Account</h1>
          <p>Manage your personal details and photo.</p>
        </div>

        {loading ? (
          <Skeleton />
        ) : (
          <div className="gz-acc-layout">
            <AccountSidebar active="/user/profile" name={displayName} photo={account.photo} contact={account.mobile || saved.email} />

            <div className="gz-acc-main">
              <section className="gz-acc-card">
                <h2>Profile photo</h2>
                <div className="gz-photo-row">
                  {account.photo ? (
                    <img className="gz-photo" src={account.photo} alt="Your profile" />
                  ) : (
                    <div className="gz-photo gz-acc-initials" aria-hidden="true">
                      {initialsOf(displayName)}
                    </div>
                  )}
                  <div>
                    <div className="gz-photo-actions">
                      <input ref={fileRef} type="file" accept="image/*" className="d-none" onChange={onPhoto} />
                      <button type="button" className="gz-btn-cart gz-btn-sm" onClick={() => fileRef.current?.click()} disabled={photoBusy}>
                        {photoBusy ? "Please wait…" : account.photo ? "Change photo" : "Upload photo"}
                      </button>
                      {account.photo && (
                        <button type="button" className="gz-btn-ghost" onClick={removePhoto} disabled={photoBusy}>
                          Remove
                        </button>
                      )}
                    </div>
                    <p className="gz-hint">JPG, PNG or WEBP, up to {MAX_PHOTO_MB} MB.</p>
                  </div>
                </div>
              </section>

              <form className="gz-acc-card" onSubmit={onSubmit} noValidate>
                <h2>Personal details</h2>
                <div className="gz-form-grid">
                  <div>
                    <label className="gz-form-label fw-bold mb-1" htmlFor="first_name">First name</label>
                    <input id="first_name" name="first_name" value={form.first_name} onChange={onChange} autoComplete="given-name"
                      className={`gz-form-input ${errors.first_name ? "invalid" : ""}`} />
                    {errors.first_name && <div className="gz-field-error">{errors.first_name}</div>}
                  </div>
                  <div>
                    <label className="gz-form-label fw-bold mb-1" htmlFor="last_name">Last name</label>
                    <input id="last_name" name="last_name" value={form.last_name} onChange={onChange} autoComplete="family-name" className="gz-form-input" />
                  </div>
                  <div className="full">
                    <label className="gz-form-label fw-bold mb-1" htmlFor="email">
                      Email {account.emailVerified && <span className="gz-verified-tag"><FontAwesomeIcon icon={faCheck} /> Verified</span>}
                    </label>
                    <input id="email" name="email" type="email" value={form.email} onChange={onChange} autoComplete="email"
                      className={`gz-form-input ${errors.email ? "invalid" : ""}`} placeholder="you@example.com" />
                    {errors.email && <div className="gz-field-error">{errors.email}</div>}
                  </div>
                  <div>
                    <label className="gz-form-label fw-bold mb-1" htmlFor="mobile">
                      Mobile {account.mobileVerified && <span className="gz-verified-tag"><FontAwesomeIcon icon={faCheck} /> Verified</span>}
                    </label>
                    <div className="gz-readonly">
                      <input id="mobile" value={account.mobile || "Not added"} readOnly className="gz-form-input" />
                      <FontAwesomeIcon icon={faLock} />
                    </div>
                    <p className="gz-hint">Your mobile number is your login and can't be changed here.</p>
                  </div>
                  <div>
                    <label className="gz-form-label fw-bold mb-1" htmlFor="uid">Customer ID</label>
                    <div className="gz-readonly">
                      <input id="uid" value={account.uid} readOnly className="gz-form-input" />
                      <button type="button" onClick={copyId} aria-label="Copy customer ID" title="Copy">
                        <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="gz-acc-actions">
                  <button type="button" className="gz-btn-ghost" disabled={!dirty || saving} onClick={() => { setForm(saved); setErrors({}); }}>
                    Discard changes
                  </button>
                  <button type="submit" className="gz-btn-cart gz-btn-save" disabled={!dirty || saving}>
                    {saving ? "Saving…" : "Save changes"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </StoreLayout>
  );
}

export default UserProfile;
