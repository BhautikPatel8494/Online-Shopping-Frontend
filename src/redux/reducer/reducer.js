import {
  ADD_TO_CART,
  ADD_QAUNTITY,
  REMOVE_FROM_CART,
  MINES_QAUNTITY,
  REMOVE_ITEM,
} from '../constant';

const initialState = {
  cartStorage: [],
  tempForChangeQuatity: false,
};
export default function productCart(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const getArrayToObject = state.cartStorage;
      const getObjectById = getArrayToObject.findIndex(
        (obj) => obj.id === action.data.id
      );
      const pushArray = state.cartStorage;
      if (getObjectById >= 0) {
        pushArray[getObjectById] = {
          ...pushArray[getObjectById],
          quatity: (pushArray[getObjectById].quatity += 1),
        };
      } else {
        pushArray.push({
          ...action.data,
          quatity: 1,
        });
      }
      return {
        ...state,
        cartStorage: pushArray,
        tempForChangeQuatity: !state.tempForChangeQuatity,
      };
    
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartStorage: []
      }

    case ADD_QAUNTITY:
      const plusQauntity = state.cartStorage;
      const plusQauntityById = plusQauntity.findIndex(
        (obj) => obj.id === action.id
      );
      const pushQauntity = state.cartStorage;
      pushQauntity[plusQauntityById] = {
        ...pushQauntity[plusQauntityById],
        quatity: (pushQauntity[plusQauntityById].quatity += 1),
      };
      return {
        ...state,
        cartStorage: pushQauntity,
        tempForChangeQuatity: !state.tempForChangeQuatity,
      };

    case MINES_QAUNTITY:
      const minesQauntity = state.cartStorage;
      const minesQauntityById = minesQauntity.findIndex(
        (obj) => obj.id === action.id
      );
      const unPushQauntity = state.cartStorage;
      unPushQauntity[minesQauntityById] = {
        ...unPushQauntity[minesQauntityById],
        quatity: (unPushQauntity[minesQauntityById].quatity -= 1),
      };
      return {
        ...state,
        cartStorage: minesQauntity,
        tempForChangeQuatity: !state.tempForChangeQuatity,
      };

    case REMOVE_ITEM:

        const getIndexForRemove = state.cartStorage;
      const getObjectToRemove = getIndexForRemove.findIndex(
        (obj) => obj.id === action.id
      );
      let removeArray = state.cartStorage;
      removeArray.splice(getObjectToRemove,1);
      return {
        ...state,
        cartStorage: removeArray,
        tempForChangeQuatity: !state.tempForChangeQuatity
      };

    default:
      return state;
  }
}
