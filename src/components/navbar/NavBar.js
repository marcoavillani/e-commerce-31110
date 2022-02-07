import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
// import CartWidget from "../icon/CartIcon";
import { FiShoppingCart } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  // const activeStyle = {
  //   color: "red",
  // };
  return (
    <Navbar bg="light" expand="lg" className="nav-bars">
      <Container>
        <Navbar.Brand>
          <Link to="/">My E-Commerce</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link>
              <NavLink
                to="/item"
                style={(isActive) => (isActive ? activeStyle : undefined)}
              >
                Item
              </NavLink>
            </Nav.Link> */}

            <NavDropdown title="Categories" id="basic-nav-dropdown">
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
              <NavDropdown.Divider />
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
        <Link to="/cart">
          <FiShoppingCart className="cart-icon" />
        </Link>
      </Container>
    </Navbar>
  );
};

export default NavBar;
