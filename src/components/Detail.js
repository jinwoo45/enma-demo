import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { parseEther, formatEther } from "ethers/lib/utils";

// import {
//   QueryClient,
//   QueryClientProvider,
//   useQuery,
// } from "@tanstack/react-query";

const Detail = (props) => {
  let { id } = useParams();
  const [list, setList] = useState([]);
  const [matic, setMatic] = useState();
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // let market = useSelector((state) => state.market);
  // let nft = useSelector((state) => state.nft);
  // console.log(nft);

  const viewList = async () => {
    await axios
      .get(`http://54.164.86.134:8080/v1/nftList/` + id)
      .then((response) => {
        console.log(response);
        console.log(response.data.result.itemsells[0].id);
        setList(response.data.result.itemsells[0]);
        console.log("price", list.price);
        const pri = list.price.toString();
        let price = formatEther(pri);
        setMatic(price);
        console.log(price);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    viewList();
    detailView();
  });

  const buyNFT = async () => {
    console.log(matic);
    console.log(props.nft.address);
    console.log(list.nftId);
    let price2 = parseEther(matic).toString();
    console.log(price2);
    // await props.market.buyNft(list.nftContract, list.nftId, { value: matic });
    await props.market.buyNft(
      "0x631C8Ebfd127f72cF244dC46B09cc8bc8A583e05",
      list.nftId,
      {
        value: price2,
      }
    );
    // await props.market.buyNft(props.market.address, list.nftId, {
    //   value: matic,
    // });
  };

  async function detailView() {
    const requestURL = await props.nft.tokenURI(list.nftId);
    const tokenURIResponse = await (await fetch(requestURL)).json();
    console.log(tokenURIResponse);

    setImage(tokenURIResponse.image);
    setTitle(tokenURIResponse.name);
    setDescription(tokenURIResponse.description);

    console.log(image);
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6" onClick={() => console.log(list.nftId)}>
            <img src={image} width="80%" alt="nft" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{title}</h4>
            <p className="pt-1 pb-1">{description}</p>
            <p>{matic} Matic</p>
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
