import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home' className='fs-2 fw-bold text-primary'>
          Food Village
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-auto fw-bold fs-5'>
            <NavLink
              to='/home'
              activeStyle={{
                fontWeight: "bold",
                color: "white",
              }}
              className='active mx-3'
            >
              Home
            </NavLink>
            <NavLink
              to='/foods'
              activeStyle={{
                fontWeight: "bold",
                color: "white",
              }} className='active mx-3'>
              Foods
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
