import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import data from "../data.js";
import styled from "styled-components";

const GreySpan = styled.button`
  color: #6c5ce7;
  background: none;
  border-radius: 5px;
  font-size: 17px;
  border: 1px solid #6c5ce7;
  cursor: pointer;
  transition: 0.3s;
  margin-left: 15px;
  &:hover {
    background: #6c5ce7;
    color: white;
  }
`;

const WhiteSpan = styled.span`
  background: rgba(255, 255, 255, 0.7);
  position: absolute;
  top: 0;
  padding: 5px 10px;
  border-radius: 5px;
`;

const Main = () => {
  const [item] = useState(data);
  let navigate = useNavigate();
  return (
    <div>
      {/* <UncontrolledExample></UncontrolledExample> */}
      {/* <img src="/banner.png" alt="banner"></img> */}

      <div className="container mt-5">
        <h3 className="mb-4">
          🔥 NFT 컬렉션
          <Link to="/nftlist">
            <GreySpan>See All</GreySpan>
          </Link>
        </h3>

        <div className="row">
          {item.map((a, i) => (
            <div
              onClick={() => {
                navigate("/nftList/" + item[i].id);
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
        <h3 className="mb-4">
          ⏱️ 라이브 경매
          <Link to="/auctionlist">
            <GreySpan>See All</GreySpan>
          </Link>
        </h3>

        <div className="row">
          {item.map((a, i) => (
            <div
              className="col-md-3"
              onClick={() => {
                navigate("/auctionList/" + item[i].id);
              }}
              style={{ position: "relative" }}
            >
              <img
                src={`/Rectangle 40` + item[i].id + `.png`}
                width="80%"
                alt="nft"
              ></img>
              <h4>{item[i].title}</h4>
              <p>{item[i].content}</p>
              <WhiteSpan>남은 날짜 : 1 days</WhiteSpan>
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
