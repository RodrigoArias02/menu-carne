import { useState } from 'react';
import './contentModalCard.css';
import ProductDetails from "./product-detail.jsx";
import Quantity from "./quantity.jsx";
// import CartOutlineIcon from '@iconify-react/ion/cart-outline';
import notFound from "../../assets/notFound.png"
import {useCart} from "../../hooks/useCart.jsx"
import ButtonIcon from '../buttons/buttonIcon.jsx';
import {CartIcon} from "../../utils/icons.jsx"
const ContentModalCard = ({product}) => {

  const ahorro=product.offer!=null ? product.offer.price - product.price:"";
    const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const productoAnadir = ()=>{
    addToCart(product,quantity)
  }
  return (
    <div className="content-modal-card">
        <div className="container-img">
        <img src={product.image || notFound} alt={product.name} onError={(e) => { e.currentTarget.src = notFound;}}/>
        </div>
        <h2>{product.name}</h2>
        <h3>4 pack - premium blend</h3>
        <p className='description-card'>{product.description}</p>
        <ProductDetails product={product} />
        {product.offer != null && (
          <span className="label">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
              <path d="M0 0h32v32H0z" fill="none" />
              <path fill="currentColor" d="M17.934 3a3.25 3.25 0 0 0-2.298.952l-11.68 11.68a3.25 3.25 0 0 0 0 4.596l7.818 7.818a3.25 3.25 0 0 0 4.596 0l11.68-11.68a3.25 3.25 0 0 0 .952-2.298V6.25A3.25 3.25 0 0 0 25.752 3zm-.884 2.366A1.25 1.25 0 0 1 17.934 5h7.818c.69 0 1.25.56 1.25 1.25v7.818c0 .332-.132.65-.366.884l-11.68 11.68a1.25 1.25 0 0 1-1.768 0L5.37 18.814a1.25 1.25 0 0 1 0-1.768zM23.002 11a2 2 0 1 0 0-4a2 2 0 0 0 0 4" />
            </svg>
            <p>Ahorras <b>${ahorro}</b> llevando 2kg</p>
          </span>
        )}
        <Quantity initial={1} min={1} max={100} clase="" onChange={(value) =>setQuantity(value)} />
        <span className="label">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.854 3.5a.979.979 0 0 0-1.708 0q-.3.546-.577 1.106a27 27 0 0 0-1.48 3.656c-.139.431-.551.73-1.023.743a29.4 29.4 0 0 0-4.267.425c-.774.136-1.065 1.018-.515 1.556q.188.185.38.365a32 32 0 0 0 3.03 2.527c.367.269.518.73.378 1.152a27 27 0 0 0-1.14 4.927c-.1.755.708 1.288 1.41.928a28.6 28.6 0 0 0 3.98-2.472a1.15 1.15 0 0 1 1.356 0a28.5 28.5 0 0 0 3.98 2.472c.701.36 1.51-.173 1.41-.928q-.058-.425-.127-.845a27 27 0 0 0-1.013-4.082c-.14-.422.01-.883.378-1.152a31.5 31.5 0 0 0 3.41-2.892c.55-.538.26-1.42-.515-1.556a29 29 0 0 0-4.267-.425a1.1 1.1 0 0 1-1.023-.743a27 27 0 0 0-2.057-4.761" />
          </svg>
          <p>Cantidad: 2kg (4 unidades)</p>
        </span>
        <ButtonIcon clase="btnAddCart" nombre="Agregar al carrito" onclick={productoAnadir} icon={<CartIcon/>}/>
        <p className="shipping">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.207 16.455C9.207 17.86 8.095 19 6.724 19s-2.483-1.14-2.483-2.546m4.966 0c0-1.405-1.112-2.545-2.483-2.545s-2.483 1.14-2.483 2.545m4.966 0h5.586m-10.552 0H3V6a1 1 0 0 1 1-1h9.793a1 1 0 0 1 1 1v2.182m5.586 8.272c0 1.406-1.111 2.546-2.482 2.546s-2.483-1.14-2.483-2.546m4.965 0c0-1.405-1.111-2.545-2.482-2.545s-2.483 1.14-2.483 2.545m4.965 0H21v-5.09l-2.515-2.579a2 2 0 0 0-1.431-.603h-2.26m.62 8.272h-.62m0 0V8.182" />
          </svg>
          Envio a Necochea y zonas cercanas
        </p>
      </div>
  );
};

export default ContentModalCard;
