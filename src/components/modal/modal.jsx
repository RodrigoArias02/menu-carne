import "./modal.css";
import { useEffect } from "react";

// 1. Añadimos 'header' a las props
const Modal = ({ isOpen, onClose, children, clase, header }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className={"paralelogramo " + clase}>
          <span className="texto-paralelogramo">Mas Elegido</span>
        </div>
        {/* 2. Si viene la prop header, la renderizamos en su propio contenedor */}
        {header && <div className="modal-header-container">{header}</div>}
     
        {children}
      </div>

    </div>
  );
};

export default Modal;