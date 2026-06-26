import Header from "./components/header/header.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Categories from "./components/categories/categories.jsx";
import ProductCard from "./components/productCard/productCard.jsx";
import BottomCart from "./components/bottomCart/bottomCart.jsx";
import Modal from "./components/modal/modal.jsx";
import ContentModalCard from "./components/contentModalCard/contentModalCard.jsx";
import ContentModalCart from "./components/contentModalCart/contentModalCart.jsx"; // <-- crearás este componente
import "./menu.css";

import { useState } from "react";
import { products, categoryOrder } from "./utils/products.js";
import agruparProductos from "./utils/products.js";
import { useCart } from "./hooks/useCart.jsx";

function Menu() {
  const { cart, totalItems } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalChildren, setModalChildren] = useState(null);
  const [claseNone, setClaseNone] = useState("");
  const groupedProducts = agruparProductos(products);

  const openProductModal = (product) => {
    console.log(1);
      setClaseNone("")
    setModalChildren(
      <ContentModalCard product={product} />
    );
    setIsModalOpen(true);
  };

  const openCartModal = (cart) => {
    console.log(2);
    setClaseNone("none")
    setModalChildren(
      <ContentModalCart cart={cart}/>
    );
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalChildren(null);
  };

  return (
    <div className="menu-container">
      <Modal isOpen={isModalOpen} onClose={closeModal} clase={claseNone}>
        {modalChildren}
      </Modal>

      <Header />

      <Navbar />

      <h1 className="title">Menú de Productos</h1>

      <Categories />

      <div className="products-grid">
        {Object.entries(groupedProducts).map(([category, products]) => (
          <div key={category} className="div-category-span" id={category}>
            <span className="text-category">
              <h2>{category}</h2>
              <p>{categoryOrder[category]}</p>
              <hr />
            </span>

            <div className="category-products">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  onClick={() => openProductModal(product)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <BottomCart
        cantProducts={cart.length}
        total={totalItems}
        onClick={() => openCartModal(cart)}
      />
    </div>
  );
}

export default Menu;