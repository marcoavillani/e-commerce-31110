import { FiShoppingCart } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { UserContext } from "../../context/UserContext";

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(true);
  const { cartQty } = useContext(CartContext);
  const { user, signIn } = useContext(UserContext);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 799) {
        setShowLinks(true);
      }
    }
    window.addEventListener("resize", handleResize);
    // return window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav>
      {user && <p className="alert">Bienvenido {user.displayName}!</p>}
      <div className="nav-center">
        <div className="nav-header">
          <Link to={"/"} className="logo">
            E-Commerce
          </Link>
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        {showLinks && (
          <div className="links-container">
            <ul className="links">
              <li>
                <Link to={"/category/computing"}>Computing</Link>
              </li>
              <li>
                <Link to={"/category/smartphones"}>Smartphones</Link>
              </li>
              <li>
                <Link to={"/category/gaming"}>Gaming</Link>
              </li>
              <li>
                <Link to={"/category/cars"}>cars</Link>
              </li>
              <li>
                <Link to={"/category/audio"}>Audio</Link>
              </li>
            </ul>
          </div>
        )}
        {!user && (
          <button className="login-btn" onClick={signIn}>
            <FcGoogle className="google-icon" /> Sign up with Google
          </button>
        )}

        <div className="cart-container">
          <NavLink to="/cart">
            <FiShoppingCart className="cart-icon" />
          </NavLink>
          <span className="cart-num">({cartQty})</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
