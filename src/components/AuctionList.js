import React, { useState, useEffect } from "react";
import data from "../data.js";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
const AuctionList = () => {
  const [item] = useState(data);
  let navigate = useNavigate();

  const WhiteSpan = styled.span`
    background: rgba(255, 255, 255, 0.7);
    position: absolute;
    top: 0;
    padding: 5px 10px;
    border-radius: 5px;
  `;

  const viewList = async () => {
    await axios
      .get("http://54.164.86.134:8080/v1/auctionList")
      .then((response) => {
        console.log(response);
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
        {item.map((a, i) => (
          <div
            className="col-md-3"
            onClick={() => {
              navigate("/auctionList/" + item[i].id);
            }}
            style={{ position: "relative" }}
          >
            <img
              src={`img/Rectangle 40` + item[i].id + `.png`}
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
  );
};

export default AuctionList;
