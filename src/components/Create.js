import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AWS from "aws-sdk";

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
  function onFileUpload(e) {
    const ACCESS_KEY = "AKIAYOOL6BQAIDDX2QVS";
    const SECRET_ACCESS_KEY = "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";
    const REGION = "ap-northeast-2";
    const S3_BUCKET = "enma-nft-content";

    // AWS ACCESS KEY를 세팅합니다.
    AWS.config.update({
      accessKeyId: ACCESS_KEY,
      secretAccessKey: SECRET_ACCESS_KEY,
    });

    // 버킷에 맞는 이름과 리전을 설정합니다.
    const myBucket = new AWS.S3({
      params: { Bucket: S3_BUCKET },
      region: REGION,
    });

    const file = e.target.files[0];

    // 파일과 파일이름을 넘겨주면 됩니다.
    const params = {
      ACL: "public-read",
      Body: file,
      Bucket: S3_BUCKET,
      Key: file.name,
    };

    myBucket
      .putObject(params)
      .on("httpUploadProgress", (evt) => {
        alert("SUCCESS");
      })
      .send((err) => {
        if (err) console.log(err);
      });
  }
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
        <input onChange={onFileUpload} type={"file"}></input>
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
