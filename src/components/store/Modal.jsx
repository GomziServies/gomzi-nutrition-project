import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "../../assets/css/store-modal.css";

/** Simple accessible dialog: closes on Esc or backdrop click, locks page scroll while open. */
const Modal = ({ title, onClose, children, width = 560 }) => {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return createPortal(
    <div className="gz-dialog-overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="gz-dialog" role="dialog" aria-modal="true" aria-label={title} style={{ maxWidth: width }}>
        <header className="gz-dialog-head">
          <h2>{title}</h2>
          <button type="button" onClick={onClose} aria-label="Close">
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </header>
        <div className="gz-dialog-body">{children}</div>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
