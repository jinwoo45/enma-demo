import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Main = () => {
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
  return (
    <div>
      <div className="container mt-5">
        <h3 className="mb-4">
          NFT 컬렉션
          <Link to="/nftList">
            <GreySpan>See All</GreySpan>
          </Link>
        </h3>
      </div>
      <div className="container mt-5">
        <h3 className="mb-4">
          라이브 경매
          <Link to="/auctionList">
            <GreySpan>See All</GreySpan>
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Main;
