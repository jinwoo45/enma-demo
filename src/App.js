import { useState, useEffect } from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";
import Create from "./components/Create";
import Detail from "./components/Detail";
import AuctionList from "./components/AuctionList";
import AuctionDetail from "./components/AuctionDetail";
import NFTList from "./components/NFTList";
import Sale from "./components/Sale";
import { ethers } from "ethers";
import { useDispatch } from "react-redux";
import { marketAction } from "./redux/actions/marketAction";
import { nftAction } from "./redux/actions/nftAction";
import SmartContract from "./config";
import axios from "axios";

const marketAddress = SmartContract.marketAddress;
const marketABI = SmartContract.abi.marketABI;
const nftAddress = SmartContract.nftAddress;
const nftABI = SmartContract.abi.nftABI;

function App() {
  const [chainId, setChainId] = useState("");
  const [market, setMarket] = useState("");
  const [nft, setNft] = useState("");
  const [provider, setProvider] = useState("");
  const [blockTimestamp, setBlockTimestamp] = useState("");

  let navigate = useNavigate();
  // const dispatch = useDispatch();

  useEffect(() => {
    async function exec() {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      console.log("accounts =>", accounts);
      if (accounts.length > 0) {
        await connect();
        lab();
      }
    }

    exec();
  }, []);

  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        let chainId = await window.ethereum.request({ method: "eth_chainId" });
        console.log(chainId);
        setChainId(chainId);

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        setProvider(provider);

        const Market = new ethers.Contract(marketAddress, marketABI, signer);
        const Nft = new ethers.Contract(nftAddress, nftABI, signer);
        setMarket(Market);
        setNft(Nft);
      } catch (e) {
        console.log("실패함");
      }
    } else {
    }
  }
  // async function connect() {
  //   if (typeof window.ethereum !== "undefined") {
  //     try {
  //       await window.ethereum.request({ method: "eth_requestAccounts" });
  //       let chainId = await window.ethereum.request({ method: "eth_chainId" });
  //       console.log(chainId);
  //       setChainId(chainId);

  //       const provider = new ethers.providers.Web3Provider(window.ethereum);
  //       const signer = provider.getSigner();

  //       dispatch(marketAction.getMarket(signer));
  //       dispatch(nftAction.getNft(signer));
  //     } catch (e) {
  //       console.log("실패함");
  //     }
  //   } else {
  //   }
  // }

  async function lab() {
    let blockNumber = await provider.getBlockNumber();
    let block = await provider.getBlock(blockNumber);
    console.log(block.timestamp);
    setBlockTimestamp(block.timestamp);
  }

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>
            <img width={50} src="/logo.png" alt="logo"></img>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/nftList")}>컬렉션</Nav.Link>
            <Nav.Link onClick={() => navigate("/auctionList")}>옥션</Nav.Link>
            <Nav.Link onClick={() => navigate("/sellNFT")}>
              NFT 판매하기
            </Nav.Link>
          </Nav>
          {chainId ? (
            <Button onClick={connect}>🦊 {chainId}</Button>
          ) : (
            <Button onClick={connect}>Connect</Button>
          )}
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Main></Main>} />
        {/* <Route path="/create" element={<Create></Create>} /> */}
        {/* 판매페이지 */}
        <Route
          path="/sellNFT"
          element={<Sale nft={nft} market={market}></Sale>}
        />
        {/* 판매리스트 */}
        <Route
          path="/nftList"
          element={<NFTList nft={nft} market={market}></NFTList>}
        />
        {/* 리스트디테일 */}
        <Route
          path="/nftlist/:id"
          element={<Detail nft={nft} market={market}></Detail>}
        />
        {/* 경매리스트 */}
        <Route
          path="/auctionlist"
          element={
            <AuctionList
              nft={nft}
              market={market}
              blockTimestamp={blockTimestamp}
            ></AuctionList>
          }
        />
        {/* 경매디테일 */}
        <Route
          path="/auctionlist/:id"
          element={<AuctionDetail nft={nft} market={market}></AuctionDetail>}
        />
        <Route path="/*" element={<div>404 not found ㅋ</div>} />
      </Routes>

      {/* footer  */}
    </div>
  );
}

export default App;
