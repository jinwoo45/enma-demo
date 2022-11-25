import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "../assets/css/Sale.module.css";
import { useSelector } from "react-redux";

const Sale = () => {
  const [tab, setTab] = useState(false);
  let instance = useSelector((state) => {
    return state;
  });
  console.log(instance);
  return (
    <div className="container">
      <h3 className="text-center mt-5" onClick={() => instance.tokenURI(16)}>
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
        <AuctionExample instance={instance}></AuctionExample>
      ) : (
        <SaleExample instance={instance}></SaleExample>
      )}
    </div>
  );
};

export default Sale;

function AuctionExample(props) {
  const [address, setAddress] = useState("");
  const [nftId, setNftId] = useState("");
  const [price, setPrice] = useState("");

  const bid = (e) => {
    e.preventDefault();
    console.log(props.instance.instance);
    console.log(props.instance.instance.startAuction());
    props.instance.instance.startAuction(address, nftId, price);
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>NFT Address</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>NFT ID</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>판매 가격(최소)</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>경매 기간</Form.Label>
        <Form.Control type="number" />
      </Form.Group>
      <Button variant="primary" onClick={bid}>
        SELL
      </Button>
    </Form>
  );
}
function SaleExample(props) {
  const [address, setAddress] = useState("");
  const onChange = (e) => {
    setAddress(e.target.value);
  };

  const [nftId, setNftId] = useState("");
  const onChange1 = (e) => {
    setNftId(e.target.value);
  };

  const [price, setPrice] = useState("");
  const onChange2 = (e) => {
    setPrice(e.target.value);
  };

  const sale = (e) => {
    e.preventDefault();
    console.log(nftId, address, price);
    console.log(props.instance.instance);
    console.log(props.instance.instance.sellNft());
    // props.instance.instance.sellNft(address,nftId, price);
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>NFT Address</Form.Label>
        <Form.Control type="text" value={address} onChange={onChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>NFT ID</Form.Label>
        <Form.Control type="text" value={nftId} onChange={onChange1} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>판매 가격</Form.Label>
        <Form.Control type="text" value={price} onChange={onChange2} />
      </Form.Group>

      <Button variant="primary" onClick={sale}>
        SELL
      </Button>
    </Form>
  );
}
