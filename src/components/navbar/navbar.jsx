import "./navbar.css";
import HomeIcon from '@iconify-react/mdi-light/home';
import ClockIcon from '@iconify-react/mdi-light/clock';
import CartOutlineIcon from '@iconify-react/ion/cart-outline';
import MagnifyIcon from '@iconify-react/mdi-light/magnify';
import { useCart } from "../../hooks/useCart";
function Navbar({openCartModal}) {
  const {cart}=useCart()
  return (
    <nav className="top-nav">
      <HomeIcon height="25"  />
      <MagnifyIcon height="25" />
      <span className="active">
        MENU
      </span>
      <CartOutlineIcon height="25"  onClick={() => openCartModal(cart)} />
     <ClockIcon height="25" />
    </nav>
  );
}

export default Navbar;