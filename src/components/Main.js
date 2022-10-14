import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  Carousel,
} from "react-bootstrap";

const Main = () => {
  return (
    <div>
      <UncontrolledExample></UncontrolledExample>
      {/* <img src="/banner.png" alt="banner"></img> */}

      <div className="container mt-5">
        <h3 className="mb-4">🔥 지금 Hot 한 NFT Collection</h3>
        <div className="row">
          <div className="col-md-3">
            <img src="/Rectangle 403.png" width="80%" />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
          <div className="col-md-3">
            <img src="/Rectangle 402.png" width="80%" />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
          <div className="col-md-3">
            <img src="/Rectangle 401.png" width="80%" />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
          <div className="col-md-3">
            <img src="/Rectangle 400.png" width="80%" />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <h3 className="mb-4">⏱️ 판매종료 임박! 늦기전에 Get!</h3>
        <div className="row">
          <div className="col-md-3">
            <img src="/Rectangle 400.png" width="80%" />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
          <div className="col-md-3">
            <img src="/Rectangle 401.png" width="80%" />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
          <div className="col-md-3">
            <img src="/Rectangle 402.png" width="80%" />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
          <div className="col-md-3">
            <img src="/Rectangle 403.png" width="80%" />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="/banner.png" alt="banner"></img>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/banner.png" alt="banner"></img>

        {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img src="/banner.png" alt="banner"></img>
      </Carousel.Item>
    </Carousel>
  );
}
