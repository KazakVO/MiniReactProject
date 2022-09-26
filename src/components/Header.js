import React, {Component} from "react";
import { Button, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import logo from './logo192.png'
import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contacts from "../pages/Contacts";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" sticky="top">
          <Container>
            <Navbar.Brand href="/">
              <img 
                src={logo}
                height="30"
                width="30"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About us</Nav.Link>
                <Nav.Link href="/contacts">Contacts</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl 
                  type="text"
                  placeholder="Search"
                  className="me-2"
                />
                <Button variant="outline-secondary">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/contacts" element={<Contacts/>} />
            <Route exact path="/blog" element={<Blog/>} />
          </Routes>
        </Router>
      </>
    )
  }
}