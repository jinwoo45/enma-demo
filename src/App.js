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
import { useState, useEffect } from "react";
import AuctionList from "./components/AuctionList";
import NFTList from "./components/NFTList";
import Sale from "./components/Sale";
import SmartContract from "./config";
import { ethers } from "ethers";
import { useDispatch } from "react-redux";
import { initInstance } from "./store.js";

function App() {
  // const { chainId, account, active, activate, deactivate } = useWeb3React();

  // const handleConnect = () => {
  //   if (active) {
  //     deactivate();
  //     return;
  //   }

  //   activate(injected, (error) => {
  //     if ("/No Ethereum provider was found on window.ethereum/".test()) {
  //       window.open("https://metamask.io/download.html");
  //     }
  //   });
  // };
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [contract, setContract] = useState([]);

  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        let chainId = await window.ethereum.request({ method: "eth_chainId" });
        console.log(chainId);
        console.log(SmartContract);
        console.log(SmartContract.contractAddress);
        console.log(SmartContract.abi.contractABI);
        // if (chainId !== 80001) {
        //   await switchChain();
        // }
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const Instance = new ethers.Contract(
          SmartContract.contractAddress,
          SmartContract.abi.contractABI,
          signer
        );
        setContract(Instance);
        console.log(Instance);
        dispatch(initInstance(contract));
      } catch (e) {
        console.log(e);
      }
    } else {
    }
  }

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>
            <img width={50} src="/logo.png" alt="logo"></img>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/sellNFT")}>
              NFT 판매하기
            </Nav.Link>
          </Nav>

          {/* {account ? (
            <Button variant="outline-success">🦊 {account}</Button>
          ) : (
            <Button variant="outline-success" onClick={handleConnect}>
              지갑 연결하기
            </Button>
          )} */}
          <Button onClick={connect}>Connect</Button>
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
        <Route path="/nftList" element={<NFTList></NFTList>} />
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
