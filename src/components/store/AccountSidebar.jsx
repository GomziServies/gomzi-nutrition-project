import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faFileInvoice,
  faLocationDot,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const LINKS = [
  { to: "/user/profile", label: "My Profile", icon: faUser },
  { to: "/user/order", label: "My Orders", icon: faBagShopping },
  { to: "/user/addresses", label: "Saved addresses", icon: faLocationDot },
  { to: "/invoice", label: "Invoices", icon: faFileInvoice },
];

export const initialsOf = (name) =>
  (name || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0].toUpperCase())
    .join("") || "U";

export const logoutCustomer = () => {
  localStorage.removeItem("fg_group_user_authorization");
  localStorage.removeItem("user_info");
  localStorage.clear();
};

/** Account navigation + avatar card, shared by account pages. */
const AccountSidebar = ({ active, name, photo, contact }) => {
  const navigate = useNavigate();

  const logout = () => {
    logoutCustomer();
    toast.success("Successfully logged out");
    navigate("/shop");
    window.dispatchEvent(new Event("user-info-updated"));
    setTimeout(() => window.location.reload(), 200);
  };

  return (
    <aside className="gz-acc-side">
      <div className="gz-acc-id">
        {photo ? (
          <img className="gz-acc-avatar" src={photo} alt={name || "Profile"} />
        ) : (
          <div className="gz-acc-avatar gz-acc-initials" aria-hidden="true">
            {initialsOf(name)}
          </div>
        )}
        <div className="gz-acc-id-text">
          <strong>{name || "My Account"}</strong>
          {contact && <span>{contact}</span>}
        </div>
      </div>

      <nav className="gz-acc-nav" aria-label="Account">
        {LINKS.map((l) => (
          <Link key={l.to} to={l.to} className={active === l.to ? "active" : ""}>
            <FontAwesomeIcon icon={l.icon} />
            {l.label}
          </Link>
        ))}
        <button type="button" onClick={logout} className="gz-acc-logout">
          <FontAwesomeIcon icon={faRightFromBracket} />
          Log out
        </button>
      </nav>
    </aside>
  );
};

export default AccountSidebar;
