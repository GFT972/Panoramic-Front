import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Dialog from "../../components/Dialog";
import ProductCard from "../../components/ProductCard";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import theme from "./theme";




const dataProduct = [
  {
    id: 1,
    brand: "Table n°1",
    categories: "Interrieur",
    image: "couvert.jpg",
    dispo: 0,
    price: "149€49",
    isTableOccupied: "true",
  },
  {
    id: 2,
    brand: "Table n°2",
    categories: "Interrieur",
    image: "couvert.jpg",
    dispo: 0,
    
  },
  {
    id: 3,
    brand: "Table n°3",
    categories: "Interrieur",
    image: "couvert.jpg",
    dispo: 1,
    price: "149€49",
    isTableOccupied: "true",
  },
  {
    id: 4,
    brand: "Table n°4",
    categories: "Interrieur",
    image: "couvert.jpg",
    dispo: 0,
    
  },
  {
    id: 5,
    brand: "Table n°5",
    categories: "Interrieur",
    image: "couvert.jpg",
    dispo: 0,
    
  },
  {
    id: 6,
    brand: "Table n°6",
    categories: "Interrieur",
    image: "couvert.jpg",
    dispo: 1,
    price: "149€49",
    isTableOccupied: "true",
    
  },
  {
    id: 7,
    brand: "Table n°7",
    categories: "Interrieur",
    image: "couvert.jpg",
    dispo: 0,
    
  },
  {
    id: 8,
    brand: "Table n°8",
    categories: "Interrieur",
    image: "couvert.jpg",
    dispo: 0,
    
  },
  {
    id: 9,
    brand: "Table n°9",
    categories: "Interrieur",
    image: "couvert.jpg",
    dispo: 0,
    
  },
  {
    id: 10,
    brand: "Table n°10",
    categories: "Interrieur",
    image: "couvert.jpg",
    dispo: 0,
    
  },
  {
    id: 11,
    brand: "Table n°11",
    categories: "Interrieur",
    image: "couvert.jpg",
    dispo: 0,
    
  },
  {
    id: 12,
    brand: "Table n°12",
    categories: "Interrieur",
    image: "couvert.jpg",
    dispo: 1,
    price: "149€49",
    isTableOccupied: "true",
    
  },
  {
    id: 13,
    brand: "Table n°13",
    categories: "Interrieur",
    image: "couvert.jpg",
    dispo: 0,
    
  },
  {
    id: 14,
    brand: "Table n°14",
    categories: "Interrieur",
    image: "couvert.jpg",
    dispo: 0,
    
  },
  {
    id: 15,
    brand: "Table n°15",
    categories: "Interrieur",
    image: "couvert.jpg",
    dispo: 0,
    
  },
];

const Products = () => {
  const [products, setProducts] = useState(dataProduct);
  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
    name: "",
  });
  const idProductRef = useRef();
  const handleDialog = (message, isLoading, name) => {
    setDialog({ message, isLoading, name });
  };
  const handleDelete = (id) => {
    const index = dataProduct.findIndex((product) => product.id === id);
    handleDialog(
      "Voulez-vous vraiment supprimer cette table ?",
      true,
      dataProduct[index].name
    );
    idProductRef.current = id;
  };
  const confirmDelete = (choose) => {
    if (choose) {
      setProducts(
        products.filter((product) => product.id !== idProductRef.current)
      );
      handleDialog("", false);
    } else {
      handleDialog("", false);
    }
  };

  // Nouvel état pour le modal d'ajout de nouvelle carte
  const [isNewCardModalOpen, setIsNewCardModalOpen] = useState(false);
  const [newCardData, setNewCardData] = useState({
    brand: "",
    categories: "",
    image: "",
    name: "",
    price: "",
    stock: "",
    rate: "",
  });

  // Fonction pour ouvrir le modal d'ajout de nouvelle carte
  const handleOpenNewCardModal = () => {
    setIsNewCardModalOpen(true);
  };

  // Fonction pour fermer le modal d'ajout de nouvelle carte
  const handleCloseNewCardModal = () => {
    setIsNewCardModalOpen(false);
  };

  // Fonction pour gérer les changements dans le formulaire d'ajout de nouvelle carte
  const handleChangeNewCardData = (e) => {
    const { name, value } = e.target;
    setNewCardData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Fonction pour ajouter la nouvelle carte
  const handleAddNewCard = () => {
    // Vérifiez ici les données de la nouvelle carte, validez-les, etc.
    // Puis ajoutez la nouvelle carte aux produits existants
    const newCard = {
      id: products.length + 1, // Générez un ID unique pour la nouvelle carte
      ...newCardData,
    };

    setProducts((prevProducts) => [...prevProducts, newCard]);
    setNewCardData({
      brand: "",
      categories: "",
      image: "",
      name: "",
      price: "",
      dispo: "",
      rate: "",
    });
    setIsNewCardModalOpen(false);
  };

  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const handleOpenOrderModal = () => {
    setIsOrderModalOpen(true);
  };

  

  return (
    <React.Fragment>
      <div className="mb-2">
        <nav className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/admin/dashboard" className="breadcrumb-link">
              <span className="breadcrumb-link-icon">
                <i className="bx bx-home-alt"></i>
              </span>
              Accueil
            </Link>
          </li>
          <li className="breadcrumb-item active">Prise de commande</li>

              {/* Bouton pour ouvrir le modal d'ajout de nouvelle carte */}
          <button className="btn-add-card" onClick={handleOpenNewCardModal}>
            Ajouter une table
          </button>

          <FormControl fullWidth sx={{ width: "20%", marginLeft: 46 }}>
      <InputLabel id="demo-simple-select-label" style={{ color: "white" }}>
        Sélectionner une salle
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Salle 1"
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: "white", // Changer la couleur du texte en blanc
        }}
      >
        <MenuItem value={10}>Interrieur</MenuItem>
        <MenuItem value={20}>Terasse</MenuItem>
  
      </Select>
    </FormControl>
          
        </nav>
      </div>
    
      <div className="grid-box">
      
        {products.map((item, idx) => (
          <ProductCard
            key={idx}
            brand={item.brand}
            categories={item.categories}
            image={item.image}
            name={item.name}
            price={item.price}
            dispo={item.dispo}
            rate={item.rate}
            isTableOccupied={item.dispo > 0}
            deleteAction={() => handleDelete(item.id)}
            handleOpenOrderModal={handleOpenOrderModal} // Ajoutez cette ligne
            id={item.id} // Ajoutez cette ligne
            
          />
        
        ))}
      </div>

      

      {dialog.isLoading && (
        <Dialog
          onDialog={confirmDelete}
          name={dialog.name}
          message={dialog.message}
        />
      )}

      {/* Modal d'ajout de nouvelle carte */}
      {isNewCardModalOpen && (
        <Dialog
          message="Ajouter une nouvelle carte"
          name="Nouvelle Carte"
          onDialog={handleCloseNewCardModal} // Fix: Utilisez handleCloseNewCardModal au lieu de isNewCardModalOpen
        >
          <form>
            {/* Ajoutez les champs pour les données de la nouvelle carte ici */}
            <label htmlFor="brand">Marque</label>
            <input
              type="text"
              name="brand"
              value={newCardData.brand}
              onChange={handleChangeNewCardData}
            />

            {/* ... Ajoutez d'autres champs pour les autres données ... */}

            {/* Bouton pour ajouter la nouvelle carte */}
            <button type="button" onClick={handleAddNewCard}>
              Ajouter
            </button>
            
          </form>
        </Dialog>
      )}
    </React.Fragment>
  );
};

export default Products;