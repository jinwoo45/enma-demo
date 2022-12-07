import { combineReducers } from 'redux';
import marketReducer from './marketReducer';
import nftReducer from './nftReducer';

export default combineReducers({
    market: marketReducer,
    nft: nftReducer,
})