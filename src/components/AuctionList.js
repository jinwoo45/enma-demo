import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
const AuctionList = () => {
  let navigate = useNavigate();

  const WhiteSpan = styled.span`
    background: rgba(255, 255, 255, 0.7);
    position: absolute;
    top: 0;
    padding: 5px 10px;
    border-radius: 5px;
  `;

  const [auctionList, setAuctionList] = useState([]);

  const viewList = async () => {
    await axios
      .get("http://54.164.86.134:8080/v1/auctionList")
      .then((response) => {
        console.log(response.data.result.itembids);
        setAuctionList(response.data.result.itembids);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    viewList();
  }, []);

  return (
    <div className="container mt-5">
      <h3 className="mb-4">⏱️ 라이브 경매</h3>

      <div className="row">
        {auctionList.map((a, i) => (
          <div
            className="col-md-3"
            onClick={() => {
              navigate("/auctionList/" + auctionList[i].id);
            }}
            style={{ position: "relative" }}
          >
            <img
              src={
                `https://enma-nft-content.s3.ap-northeast-2.amazonaws.com/` +
                auctionList[i].nftId +
                `.png`
              }
              width="80%"
              alt="nft"
            ></img>
            <h4>{auctionList[i].nftId}</h4>
            <p>시작가 : {auctionList[i].startPrice} Matic</p>
            <WhiteSpan>남은 날짜 : {auctionList[i].deadline} days</WhiteSpan>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuctionList;
