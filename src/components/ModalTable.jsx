import React from "react";
import InboxCleanUpVector from "../assets/img/vector/inbox-cleanup-amico.svg";

const Modal = ({ isOpen, onClose, content }) => {
  return (
    <div className={`modal ${isOpen ? "show" : "hide"}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">Ajouter une Table</h2>
          <button className="btn-modal-close" onClick={onClose}>
            <i className="bx bx-x"></i>
          </button>
        </div>
        <div className="modal-body">
          {content ? (
            content
          ) : (
            <div className="modal-default-content">
              <div className="modal-img-body">
                <img src={InboxCleanUpVector} alt="" />
              </div>
              <p className="modal-message" style={{ fontSize: "14px" }}>
                Default message goes here...
              </p>
              <p className="modal-message">Default name goes here...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;