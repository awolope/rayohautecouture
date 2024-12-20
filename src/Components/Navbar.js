import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useCart } from "../cartcontext"; // Ensure this is correctly imported
import "./navbar.css";
const NavigationBar = () => {
  const { cartCount } = useCart(); // Access cartCount from the CartContext

  return (
    <Navbar className="navbar-transparent " fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="./LOgo.png"
            alt="FashionShop"
            width="90"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Nav className="mx-auto">
          <Nav.Link href="/product" className="px-3">
            Shop
          </Nav.Link>
          <Nav.Link href="/cart" className="px-3">
            Cart
          </Nav.Link>
          <Nav.Link href="/#contact-us" className="px-3">
            Contact Us
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto icons-group">
          <Nav.Link href="/cart" className="cart-link">
            <i className="fas fa-shopping-cart cart-iconn"></i>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Nav.Link>
          <Nav.Link href="#profile">
            <i className="fas fa-user-circle user-icon"></i>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
