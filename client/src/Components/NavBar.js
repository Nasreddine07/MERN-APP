import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LogOut } from "../Redux/UserSlice";
import CartBtn from "./CartBtn";

const NavBar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.User.isAuth);
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">HOME</Nav.Link>
            <Nav.Link as={Link} to="/products">
              PRODUCTS
            </Nav.Link>
            <Nav.Link as={Link} to="/About">ABOUT</Nav.Link>
            <Nav.Link as={Link} to="/contact">CONTACT</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <div className="buttons">
            {isAuth ? (
              <>
                <CartBtn/>
                <Button variant="danger" onClick={() => {dispatch(LogOut());}}
                  className="btn btn-outline-dark ms-2">
                  <i className="fa-solid fa-right-from-bracket me-1"></i>LogOut</Button>
              </>
            ) : (
              <>
                <Button variant="primary" as={Link} to="/register" className="btn btn-outline-dark ms-2">
                  <i className="fa fa-user-plus me-1"></i>Register</Button>
                <Button variant="success" as={Link} to="/Login" className="btn btn-outline-dark ms-2">
                  <i className="fa fa-sign-in me-1"></i>Login</Button>
              </>
            )}
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
