import { combineReducers } from "redux";
import productCart from "./reducer";
import orderList from "./orderReducer";

export default combineReducers({
    productCart,
    orderList,
})