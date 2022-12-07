
import { ethers } from "ethers";
import SmartContract from "../../config";

const nftAddress = SmartContract.nftAddress;
const nftABI = SmartContract.abi.nftABI;

function getNft(signer) {
    return async (dispatch, getState) => {
        
        try {
            const nftInstance = new ethers.Contract(
            nftAddress,
            nftABI,
            signer
            );
            console.log(nftInstance)
            dispatch({type: "NFT", payload: {nftInstance}})
        } catch (e) {
            console.log("실패함");
        }
    }
}

export const nftAction={getNft}