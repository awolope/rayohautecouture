import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <Container className="p-4">
        <Row>
          <Col lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Customer Care</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#home" className="text-dark">
                  Contact Us{" "}
                </a>
              </li>
              <li>
                <a href="#shop" className="text-dark">
                  Size Guide
                </a>
              </li>

              <li>
                <a href="#contact" className="text-dark">
                  FAQs
                </a>
              </li>
            </ul>
          </Col>

          <Col lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Legal</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#facebook" className="text-dark">
                  Terms of Services
                </a>
              </li>

              <li>
                <a href="/privacy" className="text-dark">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </Col>
          <Col lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">About Us</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="our story" className="text-dark">
                  Our Story
                </a>
              </li>
            </ul>
          </Col>
          <Col lg="3" md="6" className="mb-4 mb-md-0 social-icons">
            <div className="social-icons-wrapper">
              <a href="#facebook" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#instagram" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#twitter" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#pinterest" className="social-icon">
                <i className="fab fa-pinterest"></i>
              </a>
              <a href="#tiktok" className="social-icon">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="footer-bottom">
        <hr className="footer-line" />
        <div className="text-muted small text-center">
          Designed by Bhor and Coded by Herrnie
        </div>
      </div>
      <div className="text-center text-white reserve ">
        © 2024 Rayo Haute Couture. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
