import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FiShoppingCart } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const app = document.querySelector(".App");
  if (app) {
    darkMode ? (app.className += " dark") : (app.className = "App");
  }

  return (
    <Navbar /* bg="light" */ expand="lg" className="nav-bars">
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            My E-Commerce
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title={"Categories"} id="basic-nav-dropdown">
              <NavDropdown.Item>
                <NavLink
                  className={({ isActive }) => (isActive ? "activeClass" : "")}
                  to="/category/smartphones"
                >
                  Smartphones
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  className={({ isActive }) => (isActive ? "activeClass" : "")}
                  to="/category/cars"
                >
                  Cars
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  className={({ isActive }) => (isActive ? "activeClass" : "")}
                  to="/category/audio"
                >
                  Audio
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  className={({ isActive }) => (isActive ? "activeClass" : "")}
                  to="/category/gaming"
                >
                  Gaming
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  className={({ isActive }) => (isActive ? "activeClass" : "")}
                  to="/category/computing"
                >
                  Computing
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <button onClick={() => setDarkMode(!darkMode)}>Dark Mode</button>

        <NavLink to="/cart">
          <FiShoppingCart className="cart-icon" />
        </NavLink>
        <span className="cart-num">2</span>
      </Container>
    </Navbar>
  );
};

export default NavBar;
