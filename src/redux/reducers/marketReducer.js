
let initialState = {
    market: ''
}

function marketReducer(state = initialState, action) {
    const {type, payload} = action
    switch(type) {
        case "CONTRACT":
            // return {...state, contractList: [...state.contractList, {contractInstance: [payload.contractInstance]}]}
            return {...state, market: payload.marketInstance}
        default:
            return {...state}
    }
}

export default marketReducer