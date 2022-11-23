import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.js";

const Detail = () => {
  const [item] = useState(data);
  let { id } = useParams();
  console.log(id);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={`../img/Rectangle 40` + item[id].id + `.png`}
              width="80%"
              alt="nft"
            />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{item[id].title}</h4>
            <p>{item[id].content}</p>
            <p>{item[id].price}원</p>
            <button className="btn btn-danger">구매하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
