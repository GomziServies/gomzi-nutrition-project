import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faChevronDown,
  faFileInvoice,
  faLocationDot,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import LoginModal from "../popup/login";
import { axiosInstance } from "../config/api";
import { toast } from "react-toastify";
import "../../css/user-menu.css";

const FILE_BASE = "https://files.fggroup.in/";

const MENU = [
  { to: "/user/profile", label: "My Profile", icon: faUser },
  { to: "/user/order", label: "My Orders", icon: faBagShopping },
  { to: "/user/addresses", label: "Saved addresses", icon: faLocationDot },
  { to: "/invoice", label: "Invoices", icon: faFileInvoice },
];

// New accounts are created as "FG USER" until the customer adds a real name
const realName = (u) => {
  const first = (u?.first_name || "").trim();
  const last = (u?.last_name || "").trim();
  const firstOk = first && first.toLowerCase() !== "fg";
  const lastOk = last && last.toLowerCase() !== "user" && last !== "-";
  if (firstOk) return { first, full: `${first} ${lastOk ? last : ""}`.trim() };
  if (lastOk) return { first: last, full: last };
  return { first: "", full: "" };
};

const initialsOf = (name) =>
  (name || "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0].toUpperCase())
    .join("");

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const authorization = localStorage.getItem("fg_group_user_authorization");

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const logout = () => {
    localStorage.removeItem("fg_group_user_authorization");
    localStorage.removeItem("user_info");
    localStorage.clear();
    setUserInfo(null);
    setOpen(false);
    toast.success("Successfully Logout!");
  };

  const http_getProfile = async () => {
    try {
      const response = await axiosInstance.get("/account/profile");
      setUserInfo(response.data.data);
      localStorage.setItem("user_info", JSON.stringify(response.data.data));
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  useEffect(() => {
    const user_info = localStorage.getItem("user_info");
    if (authorization && !user_info) {
      http_getProfile();
    } else if (user_info) {
      try {
        setUserInfo(JSON.parse(user_info));
      } catch (e) {}
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authorization]);

  useEffect(() => {
    const handleUpdate = () => {
      const user_info = localStorage.getItem("user_info");
      if (user_info) {
        try {
          setUserInfo(JSON.parse(user_info));
        } catch (e) {}
      }
    };

    window.addEventListener("user-info-updated", handleUpdate);
    window.addEventListener("storage", handleUpdate);
    return () => {
      window.removeEventListener("user-info-updated", handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  // Close the menu on outside click or Escape
  useEffect(() => {
    if (!open) return undefined;
    const onDown = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!userInfo) {
    return (
      <div>
        <li className="ddmenu userInfo fts-18">
          <button
            onClick={openModal}
            className=" video-button-bg px-0 cursor-pointer inter-500"
            aria-label="Login to your account"
          >
            {" "}
            Login <i className="far fa-user ml-1"></i>
          </button>
          {showModal && <LoginModal onClose={closeModal} />}
        </li>
      </div>
    );
  }

  const user = userInfo.user || userInfo;
  const name = realName(user);
  const photo = user.profile_image ? FILE_BASE + user.profile_image : "";
  const contact = user.mobile ? `${user.country_code || ""} ${user.mobile}`.trim() : user.email || "";

  return (
    <div className="gz-user" ref={rootRef}>
      <button
        type="button"
        className={`gz-user-trigger ${open ? "open" : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <span className="gz-user-avatar" aria-hidden="true">
          {photo ? <img src={photo} alt="" /> : initialsOf(name.full) || <FontAwesomeIcon icon={faUser} />}
        </span>
        <span className="gz-user-name">{name.first ? `Hi, ${name.first}` : "My account"}</span>
        <FontAwesomeIcon icon={faChevronDown} className="gz-user-caret" />
      </button>

      {open && (
        <div className="gz-user-menu" role="menu">
          <div className="gz-user-head">
            <span className="gz-user-avatar big" aria-hidden="true">
              {photo ? <img src={photo} alt="" /> : initialsOf(name.full) || <FontAwesomeIcon icon={faUser} />}
            </span>
            <div>
              <strong>{name.full || "Welcome"}</strong>
              {contact && <span>{contact}</span>}
            </div>
          </div>

          <nav>
            {MENU.map((item) => (
              <Link key={item.to} to={item.to} role="menuitem" onClick={() => setOpen(false)}>
                <FontAwesomeIcon icon={item.icon} />
                {item.label}
              </Link>
            ))}
          </nav>

          <button type="button" role="menuitem" className="gz-user-logout" onClick={logout} aria-label="Logout from your account">
            <FontAwesomeIcon icon={faRightFromBracket} />
            Log out
          </button>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
