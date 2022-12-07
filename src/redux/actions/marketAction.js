
import { ethers } from "ethers";
import SmartContract from "../../config";

const marketAddress = SmartContract.marketAddress;
const marketABI = SmartContract.abi.marketABI;

function getMarket(signer) {
    return async (dispatch, getState) => {
        
        try {
            const marketInstance = new ethers.Contract(
            marketAddress,
            marketABI,
            signer
            );
            console.log(marketInstance)
            dispatch({type: "CONTRACT", payload: {marketInstance}})
        } catch (e) {
            console.log("실패함");
        }
    }
}

export const marketAction={getMarket}