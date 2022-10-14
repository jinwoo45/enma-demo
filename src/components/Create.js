import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Create = () => {
  return (
    <div className="container">
      <h3 className="text-center mt-5">NFT 발행하기</h3>
      <BasicExample></BasicExample>
    </div>
  );
};

export default Create;

function BasicExample() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>이름</Form.Label>
        <Form.Control type="text" placeholder="예: 메뚜기 3분 요리" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>설명</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="예: 완료되면 실제카드로 보내겠습니다."
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>작품 업로드</Form.Label>
        <br />
        <input type={"file"}></input>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        MINT
      </Button>
    </Form>
  );
}
