import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  Carousel,
} from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import Main from "./components/Main";
import Create from "./components/Create";
import Detail from "./components/Detail";

import { useState } from "react";

function App() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <img width={50} src="/logo.png" alt="logo"></img>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/create">NFT발행하기</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="찾으시는 작품이 있나요?"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Main></Main>} />
        <Route path="/create" element={<Create></Create>} />
        <Route path="/detail/:id" element={<Detail></Detail>} />
        <Route path="*" element={<div>없는페이지임</div>} />
      </Routes>

      {/* footer  */}
      <footer className="jumbotron text-center mt-5 mb-0">
        <h3 className="text-secondary">NFT - Market</h3>
        <p>
          NM’s Homepage is designed by
          <span className="text-primary"> jinwoo</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
