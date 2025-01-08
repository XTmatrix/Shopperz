import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

function Navbar() {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItemsCount } = useContext(ShopContext);
  const totalItems = getTotalCartItemsCount();

  return (
    <div className="navbar">
      <div>
        <Link to="/" className="nav-logo">
          <img src={logo} alt="" />
          <p>SHOPPERZ</p>
        </Link>
      </div>
      <ul className="nav-menu">
        <Link
          to="/"
          onClick={() => {
            setMenu("shop");
          }}
          className="nav-link"
        >
          Shop {menu === "shop" ? <hr /> : ""}
        </Link>
        <Link
          to="/mens"
          onClick={() => {
            setMenu("men");
          }}
          className="nav-link"
        >
          Men {menu === "men" ? <hr /> : ""}
        </Link>
        <Link
          to="/womens"
          onClick={() => {
            setMenu("woman");
          }}
          className="nav-link"
        >
          Women {menu === "woman" ? <hr /> : ""}
        </Link>
        <Link
          to="/kids"
          onClick={() => {
            setMenu("kids");
          }}
          className="nav-link"
        >
          Kids {menu === "kids" ? <hr /> : ""}
        </Link>
        {/* Add Poppins fonts */}
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login </button>
        </Link>
        <Link to="/cart">
          <img
            src={cart_icon}
            alt=""
            onClick={() => {
              setMenu("cart");
            }}
          />
        </Link>
        <div className="nav-cart-count">{totalItems}</div>
      </div>
    </div>
  );
}

export default Navbar;
