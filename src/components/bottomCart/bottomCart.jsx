import "./bottomCart.css";
import CartOutlineIcon from '@iconify-react/ion/cart-outline';
function BottomCart() {
  return (
    <div className="cart-bar">

      <span className="iconCartAndQuaintity"> 
        <CartOutlineIcon height="40" />
        <span className="quantity">5</span>
      </span>

      <p>
        TU CARRITO ($3600)
      </p>

      <span>✓</span>

    </div>
  );
}

export default BottomCart;