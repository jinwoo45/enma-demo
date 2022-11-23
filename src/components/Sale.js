import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "../assets/css/Sale.module.css";
const Sale = () => {
  const [tab, setTab] = useState(false);

  return (
    <div className="container">
      <h3 className="text-center mt-5">NFT 판매하기</h3>
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
      {tab === true ? <BasicExample></BasicExample> : <Example></Example>}
    </div>
  );
};

export default Sale;

function BasicExample() {
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
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="경매" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>판매 가격(최소)</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>경매 기간</Form.Label>
        <Form.Control type="number" />
      </Form.Group>
      <Button variant="primary" type="submit">
        SELL
      </Button>
    </Form>
  );
}
function Example() {
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
        <Form.Label>판매 가격</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Button variant="primary" type="submit">
        SELL
      </Button>
    </Form>
  );
}
