import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Main from "./components/Main";
import Create from "./components/Create";
import Detail from "./components/Detail";
import { Web3Button } from "@web3modal/react";
import { useWeb3React } from "@web3-react/core";
import { injected } from "./lib/connectors";
import { useState } from "react";
import AuctionList from "./components/AuctionList";
import NFTList from "./components/NFTList";
import Sale from "./components/Sale";

function App() {
  const { chainId, account, active, activate, deactivate } = useWeb3React();

  const handleConnect = () => {
    if (active) {
      deactivate();
      return;
    }

    activate(injected, (error) => {
      if ("/No Ethereum provider was found on window.ethereum/".test()) {
        window.open("https://metamask.io/download.html");
      }
    });
  };
  let navigate = useNavigate();
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>
            <img width={50} src="/logo.png" alt="logo"></img>
          </Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="/create">NFT발행하기</Nav.Link> */}
            <Nav.Link onClick={() => navigate("/sellNFT")}>
              NFT 판매하기
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            {/* <Form.Control
              type="search"
              placeholder="찾으시는 작품이 있나요?"
              className="me-2"
              aria-label="Search"
            /> */}
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>

          {account ? (
            <Button variant="outline-success">🦊 {account}</Button>
          ) : (
            <Button variant="outline-success" onClick={handleConnect}>
              지갑 연결하기
            </Button>
          )}
        </Container>
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main></Main>
              <footer className="jumbotron text-center mt-5 mb-0">
                <h3 className="text-secondary">NFT - Market Place</h3>
                <p>
                  NM’s page is designed by
                  <span className="text-primary"> jinwoo</span>
                </p>
              </footer>
            </>
          }
        />
        <Route path="/create" element={<Create></Create>} />
        <Route path="/sellNFT" element={<Sale></Sale>} />
        <Route path="/nftlist" element={<NFTList></NFTList>} />
        <Route path="/nftlist/:id" element={<Detail></Detail>} />
        <Route path="/auctionlist" element={<AuctionList></AuctionList>} />
        <Route path="/auctionlist/:id" element={<Detail></Detail>} />
        <Route path="/*" element={<div>없는페이지임</div>} />
      </Routes>

      {/* footer  */}
    </div>
  );
}

export default App;
