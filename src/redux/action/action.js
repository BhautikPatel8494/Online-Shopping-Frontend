import {
  ADD_TO_CART,
  ADD_QAUNTITY,
  MINES_QAUNTITY,
  REMOVE_ITEM,
  ORDER_ITEM,
  REMOVE_FROM_CART
} from '../constant';

export const AddProduct = (data) => {
  return {
    type: ADD_TO_CART,
    data: data,
  };
};
export const RemoveProductFromCart = () => {
  return {
    type: REMOVE_FROM_CART,
  };
};
export const plusQauntity = (id) => {
  return {
    type: ADD_QAUNTITY,
    id: id,
  };
};
export const minesQauntity = (id) => {
  return {
    type: MINES_QAUNTITY,
    id: id,
  };
};
export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id: id,
  };
};
export const orderListAction = (data) => {
  return {
    type: ORDER_ITEM,
    data: data,
  };
};
