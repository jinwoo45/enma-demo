import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  Carousel,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import data from "../data.js";

const Main = () => {
  const [item] = useState(data);
  let navigate = useNavigate();
  return (
    <div>
      <UncontrolledExample></UncontrolledExample>
      {/* <img src="/banner.png" alt="banner"></img> */}

      <div className="container mt-5">
        <h3 className="mb-4">🔥 지금 Hot 한 NFT Collection</h3>
        <div className="row">
          {item.map((a, i) => (
            <div
              onClick={() => {
                navigate("/detail/" + item[i].id);
              }}
              className="col-md-3"
            >
              <img
                src={`/Rectangle 40` + item[i].id + `.png`}
                width="80%"
                alt="nft"
              />
              <h4>{item[i].title}</h4>
              <p>{item[i].content}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container mt-5">
        <h3 className="mb-4">⏱️ 판매종료 임박! 늦기전에 Get!</h3>
        <div className="row">
          {item.map((a, i) => (
            <div
              className="col-md-3"
              onClick={() => {
                navigate("/detail/1");
              }}
            >
              <img
                src={`/Rectangle 40` + item[i].id + `.png`}
                width="80%"
                alt="nft"
              />
              <h4>{item[i].title}</h4>
              <p>{item[i].content}</p>
            </div>
          ))}
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
