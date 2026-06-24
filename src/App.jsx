import Header from "./components/header/header.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Categories from "./components/categories/categories.jsx";
import ProductCard from "./components/productCard/productCard.jsx";
import BottomCart from "./components/bottomCart/bottomCart.jsx";
import Modal from "./components/modal/modal.jsx";
import ContentModalCard from "./components/modal/contentModalCard.jsx";
import "./menu.css";
import { useState } from "react";
const products = [
  {
    id: 1,
    name: "Milanesas de pollo Rebozadas",
    description: "Raw, pre-breaded cutlets",
    price: "$1200/kg",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaWA9ePJ8F5PUPKb6mNwuJCxWQEd9ALVz0zVbNBwbDzWL7Qv16Vha41cU&s=10",
  },
  {
    id: 2,
    name: "Hamburguesas de Carne Vacuna",
    description: "Raw patties, 4 pack",
    price: "$1800 x 4",
    image: "https://as2.ftcdn.net/jpg/00/80/57/39/1000_F_80573907_41jXLIrB4bDISKPwFnyjlVPmLr3YtWZo.jpg",
  },
  {
    id: 3,
    name: "Carne Picada Especial",
    description: "Raw minced meat",
    price: "$1400/kg",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwPdFLzNUEaUEMp3VdabgA3eAJsUpcc9BhfMk6-e3hpvNBHJ8DkZSiZ6s&s=10",
  },
  {
    id: 4,
    name: "Bife de Chorizo",
    description: "Single raw steak",
    price: "$1700/u",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqvNdxzYzh8D4uQBkB8hfh7gr0i2lPjzJgOINM9UHo9Q&s=10",
  },
];

function Menu() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

    const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="menu-container">
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContentModalCard product={selectedProduct} />
      </Modal>
      <Header />

      <Navbar />
      <h1 className="title"> Menú de Productos</h1>

      <Categories />

      <div className="products-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            description={product.description}
            price={product.price}
            onClick={() => openModal(product)}
          />
        ))}
      </div>
    
      <BottomCart />

    </div>
  );
}

export default Menu;