
import "./bottomCart.css";
import CartOutlineIcon from '@iconify-react/ion/cart-outline';
function BottomCart({cantProducts,total, onClick}) {

  return (
    <div className={cantProducts<=0 ? "cart-bar none" : "cart-bar"}  onClick={onClick}>
      <span className="iconCartAndQuaintity"> 
        <CartOutlineIcon height="40" />
        <span className="quantityCart">{cantProducts}</span>
      </span>

      <p>
        TU CARRITO (${total})
      </p>

      <span>✓</span>

    </div>
  );
}

export default BottomCart;