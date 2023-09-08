import React from "react";

const DroitModal = ({ isOpen, onClose }) => {
  return (
    <div className={`modal ${isOpen ? "show" : "hide"}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">Droits d'accès insuffisants</h2>
          <button className="btn-modal-close" onClick={onClose}>
            <i className="bx bx-x"></i>
          </button>
        </div>
        <div className="modal-body">
          <p className="modal-message">
            Vous n'avez pas les droits nécessaires pour effectuer cette tâche.
            Veuillez contacter l'administrateur pour obtenir les autorisations
            requises.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DroitModal;