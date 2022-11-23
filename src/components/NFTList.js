import React, { useEffect, useState } from "react";
import data from "../data.js";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const NFTList = () => {
  const [item] = useState(data);
  let navigate = useNavigate();

  const viewList = async () => {
    await axios
      .get("http://54.164.86.134:8080/v1/nftList")
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
      <h3 className="mb-4">🔥 NFT 컬렉션</h3>

      <div className="row">
        {item.map((a, i) => (
          <div
            onClick={() => {
              navigate("/nftList/" + item[i].id);
            }}
            className="col-md-3"
          >
            <img
              src={`img/Rectangle 40` + item[i].id + `.png`}
              width="80%"
              alt="nft"
            />
            <h4>{item[i].title}</h4>
            <p>{item[i].content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NFTList;
