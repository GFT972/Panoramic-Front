import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCircle } from "@fortawesome/free-solid-svg-icons";
import { Modal, TextField, Typography, Button } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete"; // Importez Autocomplete

const ProductCard = ({
  brand,
  categories,
  image,
  name,
  price,
  dispo,
  rate,
  deleteAction,
  isTableOccupied,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let cardClassName = "card-product";
  if (dispo === 1) {
    cardClassName += " red-border";
  } else if (dispo === 0) {
    cardClassName += " green-border";
  }

  const dishOptions = Array.from({ length: 20 }, (_, index) => `Entrée ${index}`); 
  const orderCategories = ["Entrée", "Plat", "Dessert", "Boisson"];
  
  return (
    <div className={cardClassName} onClick={handleOpen} style={{ cursor: "pointer" }}>
      <div className="card-product-header">
        <div className="card-product-header-details">
          <h1 className="product-brand">{brand}</h1>
          <p className="product-categories">{categories}</p>
        </div>
        <Dropdown
          icon="bx bx-dots-vertical-rounded"
          menu={
            <>
              <li className="dropdown-list">
                <button
                  className="dropdown-link"
                  onClick={() => deleteAction()}
                >
                  <i className="bx bx-trash dropdown-link-icon"></i>
                  Supprimer
                </button>
              </li>
            </>
          }
        />
      </div>
      <div className="card-product-img">
        <img src={require(`../assets/img/${image}`)} alt="" className="product-img" />
      </div>
      <div className="card-product-body">
        <h1 className="product-name">{name}</h1>
        <div className="flex-item">
          <p className="product-stock">{isTableOccupied ? "Occupé" : "Libre"}</p>
          <p className="product-price">{price}</p>
        </div>
        <div className="product-rate">
          <FontAwesomeIcon
            icon={faCircle}
            size="2xs"
            style={{
              color: isTableOccupied ? "#ff0000" : "#36f028",
            }}
          />
          <span className="rate">{rate}</span>
        </div>
      </div>

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
      Prise de commande
    </Typography>
    {/* Utilisation d'Autocomplete pour les champs de plats */}
    {orderCategories.map((category, index) => (
      <Autocomplete
        key={index}
        options={dishOptions}
        renderInput={(params) => (
          <TextField
            {...params}
            label={category}
            variant="outlined"
            fullWidth
            margin="normal"
          />
        )}
      />
    ))}
    <TextField label="Quantité" variant="outlined" fullWidth margin="normal" type="number" />
    <Button variant="contained" color="success" onClick={handleClose} style={{ marginTop: '10px' }}>
      Valider
    </Button>
    <Button variant="contained" color="warning" onClick={handleClose} style={{ marginTop: '10px', marginLeft: '10px' }}>
      En attente
    </Button>
    <Button variant="contained" color="error" onClick={handleClose} style={{ marginTop: '10px', marginLeft: '365px' }}>
      Annuler
    </Button>
  </div>
</Modal>
    </div>
  );
};

export default ProductCard;
