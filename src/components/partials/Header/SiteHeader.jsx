import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../../context/CartContext";
import UserInfo from "../../../assets/js/menu/userInfo";
import MobileUserInfo from "../../../assets/js/menu/mobileUserInfo";
import "../../../assets/css/nutrition.css";

/**
 * Same header as the home page (all menu options + Get Free Quote), usable on any page.
 * "How It Works" / "Certifications" are sections of the home page: on other pages
 * they take you to the home page and scroll there.
 */
const PRODUCT_LINKS = [
  ["Whey Protein", "/third-party-manufacturing/protein-powder"],
  ["Sports Nutrition", "/third-party-manufacturing/sports-nutrition-supplements"],
  ["Multivitamin Tablets", "/third-party-manufacturing/multivitamins-tablet"],
  ["Peanut Butter", "/third-party-manufacturing/peanut-butter"],
];

const LOGO = "../assets/images/logo/gomzi-life-science-logo.webp";

function SiteHeader() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartCount, setIsCartOpen } = useCart();

  const openSide = () => {
    document.getElementById("demo").style.width = "100%";
  };
  const closeSide = () => {
    const el = document.getElementById("demo");
    if (el) el.style.width = "0px";
  };

  const goToSection = (e, id) => {
    e.preventDefault();
    closeSide();
    const scroll = () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    if (location.pathname === "/") return scroll();

    navigate("/");
    let tries = 0;
    const timer = setInterval(() => {
      tries += 1;
      if (document.getElementById(id) || tries > 30) {
        clearInterval(timer);
        setTimeout(scroll, 150);
      }
    }, 100);
  };

  const preventNav = (e) => e.preventDefault();

  const CartButton = ({ className }) => (
    <button
      type="button"
      className={`gz-hdr-cart ${className || ""}`}
      onClick={() => {
        closeSide();
        setIsCartOpen(true);
      }}
      aria-label={`Open cart, ${cartCount} item${cartCount === 1 ? "" : "s"}`}
    >
      <FontAwesomeIcon icon={faCartShopping} />
      {cartCount > 0 && <span className="gz-hdr-cart-badge">{cartCount > 99 ? "99+" : cartCount}</span>}
    </button>
  );

  const Logo = ({ className }) => (
    <div className={className}>
      <Link to="/">
        <div>
          <img src={process.env.PUBLIC_URL + LOGO} width="100%" alt="Gomzi Life Science" />
        </div>
      </Link>
    </div>
  );

  const dropdown = (mobile) => ({
    item: mobile ? "mob-has-dropdown" : "has-dropdown",
    menu: mobile ? "mob-dd-menu" : "dd-menu",
  });

  const menu = (mobile) => {
    const dd = dropdown(mobile);
    return (
      <>
        <li>
          <a className="inter-500" href="#process" onClick={(e) => goToSection(e, "process")}>
            How It Works
          </a>
        </li>

        <li className={dd.item}>
          <a href="/" onClick={preventNav} className="inter-500">
            Our Products{" "}
            <span className="dd-arrow">
              <i className="fa-solid fa-caret-down"></i>
            </span>
          </a>
          <ul className={dd.menu}>
            {PRODUCT_LINKS.map(([label, to]) => (
              <li key={to}>
                <Link className="inter-500" to={to} onClick={closeSide}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </li>

        <li className={dd.item}>
          <a href="/" onClick={preventNav} className="inter-500">
            Why Gomzi Lifesciences{" "}
            <span className="dd-arrow">
              <i className="fa-solid fa-caret-down"></i>
            </span>
          </a>
          <ul className={dd.menu}>
            <li>
              <a className="inter-500" href="#certification" onClick={(e) => goToSection(e, "certification")}>
                Certifications
              </a>
            </li>
            <li>
              <Link className="inter-500" to="/founder" onClick={closeSide}>
                Founder Story
              </Link>
            </li>
            <li>
              <Link className="inter-500" to="/aboutus" onClick={closeSide}>
                About Us
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link className="inter-500" to="/nutrition/contact-us" onClick={closeSide}>
            Contact Us
          </Link>
        </li>
        <li>
          <Link className="inter-500" to="/help-center" onClick={closeSide}>
            Help Center
          </Link>
        </li>
        <li>
          <Link className="inter-500" to="/shop" onClick={closeSide}>
            Shop
          </Link>
        </li>
        <li>
          <Link className="inter-500" to="/read-more-white-labelling-blogs" onClick={closeSide}>
            Blog
          </Link>
        </li>
      </>
    );
  };

  return (
    <>
      <div className="my-auto">
        <section className="header-main"></section>
      </div>
      <div className="container-fluid main p-0 m-0 homePage-header-position site-header">
        <div className="homePage-header-position-div">
          <Logo className="d-lg-block d-none log-new" />
          <Logo className="d-lg-none d-sm-block t0 log1-new" />

          <div className="center-menu d-xl-block d-none">
            <ul className="center-menu-list">{menu(false)}</ul>
          </div>

          <div className="side" id="demo">
            <span className="closebtn" onClick={closeSide}>
              ×
            </span>
            <Link to="/" className="homePage-header-position-div-mb-mt" onClick={closeSide}>
              <img className="lazy" src={process.env.PUBLIC_URL + LOGO} width="40%" alt="Gomzi Life Science" />
            </Link>
            <ul className="mobileUserInfo aa">
              {menu(true)}
              <MobileUserInfo />
            </ul>
          </div>

          <span className="d-xl-none d-sm-block btnn cp homePage-header-position-div-fts-color" onClick={openSide}>
            ☰
          </span>

          <CartButton className="gz-hdr-cart-mobile d-xl-none" />

          <div className="login d-xl-block d-none">
            <div className="gz-hdr-actions">
              <CartButton />
              <ul>
                <UserInfo />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SiteHeader;
