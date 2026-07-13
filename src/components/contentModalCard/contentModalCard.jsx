import { useState } from "react";
import "./contentModalCard.css";
import ProductDetails from "./product-detail.jsx";
import Quantity from "./quantity.jsx";
// import CartOutlineIcon from '@iconify-react/ion/cart-outline';
import notFound from "../../assets/notFound.png";
import { useCart } from "../../hooks/useCart.jsx";
import ButtonIcon from "../buttons/buttonIcon.jsx";
import { CartIcon, LabelIcon, StarIcon } from "../../utils/icons.jsx";
const ContentModalCard = ({ product }) => {
  const ahorro =
    product.offer != null ? product.offer.price - product.price : "";
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const productoAnadir = () => {
    addToCart(product, quantity);
  };
  return (
    <div className="content-modal-card">
      <div className="container-img">
        <img
          src={product.image || notFound}
          alt={product.name}
          onError={(e) => {
            e.currentTarget.src = notFound;
          }}
        />
      </div>
      <h2>{product.name}</h2>
      <h3>4 pack - premium blend</h3>
      <p className="description-card">{product.description}</p>
      <ProductDetails product={product} />
      {product.offer != null && (
         <span className="label">
          <LabelIcon/>
          <p>
            Ahorras <b>${ahorro}</b> llevando 2kg
          </p>
        </span>
      )}
      <Quantity
        initial={1}
        min={1}
        max={100}
        claseMargen="quantity-card-modal"
        onChange={(value) => setQuantity(value)}
      />
      {product.unidadesPorKg !== null && (
        <span className="label">
          <StarIcon/>
          <p>Cantidad: 1kg ({product.unidadesPorKg} unidades)</p>
        </span>
      )}
      <ButtonIcon
        clase="btnAddCart"
        nombre="Agregar al carrito"
        onclick={productoAnadir}
        icon={<CartIcon />}
      />
    </div>
  );
};

export default ContentModalCard;
