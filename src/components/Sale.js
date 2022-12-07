import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "../assets/css/Sale.module.css";
import { parseEther, formatEther } from "ethers/lib/utils";

const Sale = (props) => {
  const [tab, setTab] = useState(false);

  const [nftId, setNftId] = useState("");
  const [price, setPrice] = useState("");

  const [auctionNftId, setAuctionNftId] = useState("");
  const [auctionPrice, setAuctionPrice] = useState("");
  const [deadline, setDeadline] = useState("");

  const sale = async (e) => {
    e.preventDefault();
    console.log(nftId, props.nft.address, price);
    // console.log(await props.nft.owner());
    let approveRes = await props.nft.approve(props.market.address, nftId, {
      gasPrice: 250000000000,
    });
    approveRes.wait(1);
    // let approveRes = await props.nft.approve(
    //   "0x024437cAc8B345B5c7B2805281b6d970f605707b",
    //   nftId
    // );
    console.log(approveRes);
    let price2 = parseEther(price).toString();
    props.market.sellNft(props.nft.address, nftId, price2);
  };

  const startAuction = async (e) => {
    e.preventDefault();
    let approveRes = await props.nft.approve(
      props.market.address,
      auctionNftId,
      {
        gasPrice: 250000000000,
      }
    );
    approveRes.wait(1);

    let auctionPrice2 = parseEther(auctionPrice).toString();

    const result = props.market.startAuction(
      props.nft.address,
      auctionNftId,
      auctionPrice2,
      deadline,
      {
        gasPrice: 250000000000,
      }
    );

    console.log(result);
  };

  return (
    <div className="container">
      <h3
        className="text-center mt-5"
        onClick={async () => console.log(await props.nft.owner())}
      >
        NFT 판매하기
      </h3>
      <div>
        <button
          className={
            tab === false
              ? `${styles.saleButton} ${styles.active}`
              : styles.saleButton
          }
          onClick={() => {
            setTab(false);
          }}
        >
          판매
        </button>
        <button
          className={
            tab === true
              ? `${styles.saleButton} ${styles.active}`
              : styles.saleButton
          }
          onClick={() => {
            setTab(true);
          }}
        >
          경매
        </button>
      </div>
      {tab === true ? (
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>NFT ID</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => {
                setAuctionNftId(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>판매 가격(최소)</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => {
                setAuctionPrice(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>경매 기간(일수 단위)</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => {
                setDeadline(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" onClick={startAuction}>
            START AUCTION
          </Button>
        </Form>
      ) : (
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>NFT ID</Form.Label>
            <Form.Control
              type="text"
              value={nftId}
              onChange={(e) => {
                setNftId(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>판매 가격</Form.Label>
            <Form.Control
              type="text"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </Form.Group>

          <Button variant="primary" onClick={sale}>
            SELL
          </Button>
        </Form>
      )}
    </div>
  );
};

export default Sale;
