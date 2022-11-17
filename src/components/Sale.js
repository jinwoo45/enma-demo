import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Sale = () => {
  return (
    <div className="container">
      <h3 className="text-center mt-5">NFT 판매하기</h3>
      <BasicExample></BasicExample>
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
