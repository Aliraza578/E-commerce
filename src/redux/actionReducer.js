import { ADD_TO_CART,REMOVE_ITEMS } from "./actionType";

const initialState = {
  cartItems: [],
  totalPrice: 0,
  totalItems: 0,
};

const actionReducer = (state = initialState, action) => {
  if (action.type === ADD_TO_CART) {
    const existingProduct = state.cartItems.find((item) => item.id === action.payload.id);
    if (existingProduct) {
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 }: item),
      };
    } else {
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        totalItems: state.totalItems + 1,
      };
    } 
  } else if(action.type===REMOVE_ITEMS){
      const  productId = action.payload;
      const newArray = state.cartItems.filter((items)=>{
        if(items.id!==productId){
          return true
        } else{
          return false
        }
      }) 
      return{
        ...state,
        cartItems:[...newArray]
      }
  }
   else {
    return state;
  }
};

export { actionReducer };
