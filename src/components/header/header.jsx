import "./header.css";
import logo from "../../assets/logofin.png";
function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Aroma Casdero" />
      </div>
    </header>
  );
}



export default Header;