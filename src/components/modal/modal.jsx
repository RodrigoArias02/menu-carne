import "./modal.css";
import { useEffect } from "react";

const Modal = ({ isOpen, onClose, children, clase }) => {
    useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
    if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className={"paralelogramo "+ clase}>
          <span className="texto-paralelogramo">Mas Elegido</span>
        </div>
        <button className="modal-close" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
