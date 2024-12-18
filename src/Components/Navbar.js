import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./navbar.css";
import "./LOgo.png";
import { useCart } from "./cartcontext"; // Import the updated CartProvider

const NavigationBar = () => {
  const { cartCount } = useCart(); // Access cartCount from the CartContext

  return (
    <Navbar expand="sm" className="navbar-transparent" fixed="top">
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

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className="px-3">
              Collection
            </Nav.Link>
            <Nav.Link href="/product" className="px-3">
              Shop
            </Nav.Link>
            <Nav.Link href="#contact" className="px-3">
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="/cart" className="cart-link">
              <i className="fas fa-shopping-cart text-danger"></i>{" "}
              <span className="cart-count">{cartCount}</span>
            </Nav.Link>
            <Nav.Link href="#profile">
              <i className="fas fa-user-circle text-danger"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
