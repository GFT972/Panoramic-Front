import React, { useState } from "react";
import { Modal, TextField, Typography, Button } from "@mui/material";

const OrderModal = ({ open, handleClose, productName }) => {
  // Ici, productName est passé en tant que prop pour afficher le nom du plat dans le modal

  return (
    <Modal open={open} onClose={handleClose}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#fff",
          padding: "20px",
          minWidth: "300px",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Prise de commande - {productName}
        </Typography>
        <TextField label="Quantité" variant="outlined" fullWidth margin="normal" type="number" />
        <Button variant="contained" color="primary" onClick={handleClose}>
          Valider
        </Button>
      </div>
    </Modal>
  );
};

export default OrderModal;