import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "../assets/css/Sale.module.css";
import { useSelector } from "react-redux";
import { parseEther, formatEther } from "ethers/lib/utils";

const Sale = (props) => {
  const [tab, setTab] = useState(false);

  // let instance = useSelector((state) => {
  //   return state;
  // });
  // console.log(instance);

  const [nftId, setNftId] = useState("");
  const onChange1 = (e) => {
    setNftId(e.target.value);
  };

  const [price, setPrice] = useState("");
  const onChange2 = (e) => {
    console.log(price);
    setPrice(e.target.value);
  };

  const sale = async (e) => {
    e.preventDefault();
    console.log(nftId, props.market.address, price);
    console.log(await props.nft.owner());
    let approveRes = await props.nft.approve(props.market.address, nftId);
    approveRes.wait(1);
    // let approveRes = await props.nft.approve(
    //   "0x024437cAc8B345B5c7B2805281b6d970f605707b",
    //   nftId
    // );
    console.log(approveRes);

    let price2 = parseEther(price).toString();
    props.market.sellNft(props.market.address, nftId, price2);
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
        <AuctionExample props={props}></AuctionExample>
      ) : (
        <Form>
          {/* <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>NFT Address</Form.Label>
          <Form.Control type="text" value={address} onChange={onChange} />
        </Form.Group> */}
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
    console.log(price);
    setPrice(e.target.value);
  };

  const sale = async (e) => {
    e.preventDefault();
    console.log(nftId, address, price);
    console.log(await props.nft.owner());
    // let approveRes = await props.nft.approve(
    //   "0x024437cAc8B345B5c7B2805281b6d970f605707b",
    //   nftId
    // );
    // approveRes.wait(1);
    // console.log(approveRes);

    let price2 = parseEther(price).toString();
    props.market.sellNft(
      "0x631C8Ebfd127f72cF244dC46B09cc8bc8A583e05",
      nftId,
      price2
    );
  };

  return (
    <Form>
      {/* <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>NFT Address</Form.Label>
        <Form.Control type="text" value={address} onChange={onChange} />
      </Form.Group> */}
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
