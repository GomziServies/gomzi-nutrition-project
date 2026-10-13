import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPen, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import StoreLayout from "../../components/store/StoreLayout";
import AccountSidebar from "../../components/store/AccountSidebar";
import AddressForm from "../../components/store/AddressForm";
import Modal from "../../components/store/Modal";
import LoginModal from "../../assets/js/popup/login";
import { deleteAddress, fetchAddresses, saveAddress, setDefaultAddress } from "../../assets/js/store/storeApi";
import "../../assets/css/account.css";
import "../../assets/css/addresses.css";

const FILE_BASE = "https://files.fggroup.in/";
const MAX_ADDRESSES = 10;
const hasAuth = () => !!localStorage.getItem("fg_group_user_authorization");

const Skeleton = () => (
  <div className="gz-acc-layout" aria-busy="true">
    <div className="gz-acc-side gz-skel" style={{ height: 320 }} />
    <div className="gz-acc-main">
      <div className="gz-acc-card gz-skel" style={{ height: 180 }} />
      <div className="gz-acc-card gz-skel" style={{ height: 180 }} />
    </div>
  </div>
);

export default function Addresses() {
  const [authed, setAuthed] = useState(hasAuth);
  const [showLogin, setShowLogin] = useState(false);
  const [state, setState] = useState("loading");
  const [addresses, setAddresses] = useState([]);
  const [editing, setEditing] = useState(null); // null | "new" | address object
  const [busyId, setBusyId] = useState(null);
  const [person, setPerson] = useState({ name: "", contact: "", photo: "" });

  const load = useCallback(async () => {
    setState("loading");
    try {
      const { data } = await fetchAddresses();
      setAddresses(data || []);
      setState("ready");
    } catch (e) {
      if (e.status === 401) {
        localStorage.removeItem("fg_group_user_authorization");
        setAuthed(false);
      } else {
        setState("error");
      }
    }
  }, []);

  useEffect(() => {
    if (!authed) return;
    load();
    try {
      const data = JSON.parse(localStorage.getItem("user_info") || "null");
      const u = data?.user || data || {};
      const first = (u.first_name || "").trim();
      const last = (u.last_name || "").trim();
      const real = first && first.toLowerCase() !== "fg";
      setPerson({
        name: real ? `${first} ${last && last.toLowerCase() !== "user" ? last : ""}`.trim() : "",
        contact: u.mobile ? `${u.country_code || ""} ${u.mobile}`.trim() : u.email || "",
        photo: u.profile_image ? FILE_BASE + u.profile_image : "",
      });
    } catch (e) {
      /* sidebar details are optional */
    }
  }, [authed, load]);

  const save = async (values) => {
    try {
      await saveAddress({ ...values, id: editing && editing !== "new" ? editing._id : undefined });
      toast.success(editing === "new" ? "Address added" : "Address updated");
      setEditing(null);
      await load();
    } catch (e) {
      toast.error(e.message || "Couldn't save the address");
      throw e;
    }
  };

  const makeDefault = async (a) => {
    setBusyId(a._id);
    try {
      await setDefaultAddress(a._id);
      toast.success("Default address updated");
      await load();
    } catch (e) {
      toast.error(e.message || "Couldn't update the default address");
    } finally {
      setBusyId(null);
    }
  };

  const remove = async (a) => {
    if (!window.confirm(`Delete this ${a.label.toLowerCase()} address?`)) return;
    setBusyId(a._id);
    try {
      await deleteAddress(a._id);
      toast.success("Address deleted");
      await load();
    } catch (e) {
      toast.error(e.message || "Couldn't delete the address");
    } finally {
      setBusyId(null);
    }
  };

  if (!authed) {
    return (
      <StoreLayout title="Saved addresses">
        <div className="gz-container">
          <div className="gz-login-gate">
            <div className="gz-login-icon" aria-hidden="true">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <h1>Log in to manage your addresses</h1>
            <p>Save your delivery addresses once and check out faster every time.</p>
            <button className="gz-btn-checkout" onClick={() => setShowLogin(true)}>
              Login / Sign up
            </button>
            <Link to="/shop" className="gz-link-btn mt-3 d-inline-block">← Continue shopping</Link>
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
    <StoreLayout title="Saved addresses">
      <div className="gz-container">
        <div className="gz-acc-head gz-addr-head">
          <div>
            <h1>Saved addresses</h1>
            <p>Your delivery addresses. Checkout uses your default address automatically.</p>
          </div>
          {state === "ready" && addresses.length > 0 && addresses.length < MAX_ADDRESSES && (
            <button type="button" className="gz-btn-cart gz-btn-sm gz-inline-btn" onClick={() => setEditing("new")}>
              <FontAwesomeIcon icon={faPlus} /> Add new address
            </button>
          )}
        </div>

        {state === "loading" ? (
          <Skeleton />
        ) : (
          <div className="gz-acc-layout">
            <AccountSidebar active="/user/addresses" name={person.name} photo={person.photo} contact={person.contact} />

            <div className="gz-acc-main">
              {state === "error" && (
                <div className="gz-acc-card gz-empty">
                  <p>We couldn't load your addresses.</p>
                  <button className="gz-btn-cart gz-btn-sm gz-inline-btn" onClick={load}>Try again</button>
                </div>
              )}

              {state === "ready" && addresses.length === 0 && (
                <div className="gz-acc-card gz-empty">
                  <div className="gz-empty-icon"><FontAwesomeIcon icon={faLocationDot} /></div>
                  <h2>No saved addresses</h2>
                  <p>Add an address now so checkout is one tap faster.</p>
                  <button type="button" className="gz-btn-cart gz-btn-sm gz-inline-btn" onClick={() => setEditing("new")}>
                    <FontAwesomeIcon icon={faPlus} /> Add address
                  </button>
                </div>
              )}

              {state === "ready" && addresses.length > 0 && (
                <div className="gz-addr-grid">
                  {addresses.map((a) => (
                    <article className={`gz-addr-card ${a.is_default ? "default" : ""}`} key={a._id}>
                      <header>
                        <span className="gz-addr-tag">{a.label}</span>
                        {a.is_default && <span className="gz-addr-default">Default</span>}
                      </header>
                      <p className="gz-addr-name">{a.name}</p>
                      <p className="gz-addr-text">
                        {[a.address_line_1, a.address_line_2, a.landmark].filter(Boolean).join(", ")}
                        <br />
                        {[a.city, a.state, a.pin_code].filter(Boolean).join(", ")}
                      </p>
                      <p className="gz-addr-phone">Mobile: {a.mobile}</p>
                      <footer>
                        <button type="button" onClick={() => setEditing(a)} disabled={busyId === a._id}>
                          <FontAwesomeIcon icon={faPen} /> Edit
                        </button>
                        <button type="button" className="danger" onClick={() => remove(a)} disabled={busyId === a._id}>
                          <FontAwesomeIcon icon={faTrashCan} /> Delete
                        </button>
                        {!a.is_default && (
                          <button type="button" className="link" onClick={() => makeDefault(a)} disabled={busyId === a._id}>
                            Set as default
                          </button>
                        )}
                      </footer>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {editing && (
        <Modal title={editing === "new" ? "Add new address" : "Edit address"} onClose={() => setEditing(null)} width={620}>
          <AddressForm
            initial={editing === "new" ? { name: person.name, is_default: addresses.length === 0 } : editing}
            onSubmit={save}
            onCancel={() => setEditing(null)}
            submitLabel={editing === "new" ? "Save address" : "Update address"}
          />
        </Modal>
      )}
    </StoreLayout>
  );
}
