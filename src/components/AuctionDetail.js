import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import axios from "axios";

const AuctionDetail = () => {
  let { id } = useParams();
  const [list, setList] = useState([]);
  let instance = useSelector((state) => {
    return state;
  });
  console.log(instance);

  const viewList = async () => {
    await axios
      .get(`http://54.164.86.134:8080/v1/auctionList/` + id)
      .then((response) => {
        console.log(response);
        console.log(response.data.result.itembids[0].id);
        setList(response.data.result.itembids[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    viewList();
  }, []);

  const bidNFT = () => {
    instance.bidNFT(list.nftId);
  };
  const endAuction = () => {
    instance.endAuction(list.nftId);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6" onClick={() => console.log(list.nftId)}>
            <img src={`../img/Rectangle 402.png`} width="80%" alt="nft" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{list.nftId}</h4>
            <p>{list.startPrice} Matic</p>
            <p>마감기한 : {list.deadline} days</p>
            <p>판매자 : {list.seller}</p>
            <button className="btn btn-danger" onClick={bidNFT}>
              입찰
            </button>
            <button className="btn btn-danger" onClick={endAuction}>
              낙찰
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionDetail;
