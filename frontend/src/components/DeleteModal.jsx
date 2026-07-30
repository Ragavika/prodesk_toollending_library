import React from "react";
import "./DeleteModal.css";
const DeleteModal = ({
  isOpen,
  onClose,
  onConfirm,
  toolName,
  loading = false,
}) => {
  if (!isOpen) return null;

  return (
    <div
  className="modal-overlay"
  role="dialog"
  aria-modal="true"
  aria-labelledby="delete-modal-title"
>
  <div className="modal">

    <h2
      id="delete-modal-title"
      className="modal-title"
    >
      Delete Tool
    </h2>

    <p className="modal-message">
      Are you sure you want to delete{" "}
      <strong>{toolName}</strong>?
      <br />
      This action cannot be undone.
    </p>

    <div className="modal-actions">

      <button
        type="button"
        onClick={onClose}
        disabled={loading}
        className="cancel-button"
      >
        Cancel
      </button>

      <button
        type="button"
        onClick={onConfirm}
        disabled={loading}
        className="delete-button"
      >
        {loading ? "Deleting..." : "Delete"}
      </button>

    </div>

  </div>
</div>
  );
};

export default DeleteModal;