import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { parseEther, formatEther } from "ethers/lib/utils";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import axios from "axios";

const AuctionDetail = (props) => {
  let { id } = useParams();
  const [list, setList] = useState([]);
  const [matic, setMatic] = useState();
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startPrice, setStartPrice] = useState("");

  useEffect(() => {
    viewList();
    detailView();
  });

  const viewList = async () => {
    await axios
      .get(`http://54.164.86.134:8080/v1/auctionList/` + id)
      .then((response) => {
        // console.log(response);
        // console.log(response.data.result.itembids[0].id);
        setList(response.data.result.itembids[0]);
        // console.log("price", list.startPrice);
        const pri = list.startPrice.toString();
        let price = formatEther(pri);
        setMatic(price);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const bidNFT = async () => {
    console.log(props.nft.address, list.nftId, startPrice);
    await props.market.bidNft(props.nft.address, list.nftId, {
      value: parseEther(startPrice),
    });
    // await props.market.bidNft(props.nft.address, list.nftId, {
    //   value: startPrice,
    // });
  };
  const endAuction = async () => {
    await props.market.endAuction(props.nft.address, list.nftId);
  };

  async function detailView() {
    const requestURL = await props.nft.tokenURI(list.nftId);
    const tokenURIResponse = await (await fetch(requestURL)).json();
    // console.log(tokenURIResponse);

    setImage(tokenURIResponse.image);
    setTitle(tokenURIResponse.name);
    setDescription(tokenURIResponse.description);

    // console.log(image);
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div
            className="col-md-6 mt-5"
            onClick={() => console.log(list.nftId)}
          >
            <img src={image} width="80%" alt="nft" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{title}</h4>
            <p>{matic} Matic</p>
            <p>deadline : {list.deadline}</p>
            <p>seller : {list.seller}</p>
            <div
              style={{
                display: "flex",
              }}
            >
              <Form.Group controlId="formContact">
                <Form.Control
                  onChange={(event) => setStartPrice(event.target.value)}
                  type="number"
                  placeholder="입찰가를 입력해주세요"
                />
              </Form.Group>
              <button
                className="btn btn-danger"
                style={{ marginLeft: "10px" }}
                onClick={bidNFT}
              >
                입찰
              </button>
            </div>
            <button className="btn btn-primary mt-4" onClick={endAuction}>
              낙찰(only seller)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionDetail;
