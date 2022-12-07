import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const NFTList = () => {
  let navigate = useNavigate();

  const [list, setList] = useState([]);

  const viewList = async () => {
    await axios
      .get("http://54.164.86.134:8080/v1/nftList")
      .then((response) => {
        console.log(response.data.result.itemsells);
        setList(response.data.result.itemsells);
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
        {list.map((a, i) => (
          <div
            onClick={() => {
              navigate("/nftList/" + list[i].id);
            }}
            className="col-md-3"
          >
            <img
              src={
                `https://enma-nft-content.s3.ap-northeast-2.amazonaws.com/` +
                list[i].nftId +
                `.png`
              }
              width="80%"
              alt="nft"
            />
            <h4>{list[i].nftId}</h4>
            <p>{list[i].price} Matic</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NFTList;
