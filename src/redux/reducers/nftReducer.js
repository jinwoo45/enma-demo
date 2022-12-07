
let initialState = {
    nft: ''
}

function nftReducer(state = initialState, action) {
    const {type, payload} = action
    switch(type) {
        case "NFT":
            // return {...state, contractList: [...state.contractList, {contractInstance: [payload.contractInstance]}]}
            return {...state, nft: payload.nftInstance}
        default:
            return {...state}
    }
}

export default nftReducer