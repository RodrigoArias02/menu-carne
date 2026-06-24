import Header from "./components/header/header.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Categories from "./components/categories/categories.jsx";
import ProductCard from "./components/productCard/productCard.jsx";
import BottomCart from "./components/bottomCart/bottomCart.jsx";
import Modal from "./components/modal/modal.jsx";
import ContentModalCard from "./components/modal/contentModalCard.jsx";
import "./menu.css";
import { useState } from "react";
import {products} from "./utils/products.js"
import agruparProductos from "./utils/products.js"
import { categoryOrder } from "./utils/products.js";

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
  const groupedProducts = agruparProductos(products);

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
        {Object.entries(groupedProducts).map(([category, products]) => (
          <div key={category} className="div-category-span" id={category}>
            <span className="text-category">
              <h2>{category}</h2>
              <p>{categoryOrder[category]}</p>
              <hr />
            </span>

            <div key={category}  className="category-products">
              

              {products.map((product) => (
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
          </div>
        ))}
      </div>
    
      <BottomCart />

    </div>
  );
}

export default Menu;