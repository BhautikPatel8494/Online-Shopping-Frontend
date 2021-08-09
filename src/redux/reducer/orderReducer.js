import {
    ORDER_ITEM,
  } from '../constant';

const initialState = {
    orderList: [],
  };

  export default function OrderList(state=initialState, action) {
    switch (action.type) {
        case ORDER_ITEM:
            return {
                ...state,
                orderList: action.data
            }
    
        default:
            return state;
    }
  }
