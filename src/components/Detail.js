import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const Detail = () => {
  let { id } = useParams();
  const [list, setList] = useState([]);
  let instance = useSelector((state) => {
    return state;
  });
  console.log(instance);

  const viewList = async () => {
    await axios
      .get(`http://54.164.86.134:8080/v1/nftList/` + id)
      .then((response) => {
        console.log(response);
        console.log(response.data.result.itemsells[0].id);
        setList(response.data.result.itemsells[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    viewList();
  }, []);

  const buyNFT = async () => {
    await instance.buyNft(list.price, list.nftContract, list.nftId);
  };

  console.log(id);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6" onClick={() => console.log(list.nftId)}>
            <img src={`../img/Rectangle 401.png`} width="80%" alt="nft" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{list.nftId}</h4>
            <p>{list.price} Matic</p>
            <button className="btn btn-danger" onClick={buyNFT}>
              구매하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
