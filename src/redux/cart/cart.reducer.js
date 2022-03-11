import { toggleCard } from "./cart.action";
import { addItemsToCart, decreaseItemsToCart } from "./cart.utiles";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state=INITIAL_STATE, action = toggleCard) =>{
    switch (action.type) {
        case 'TOGGLE_CART':
            return {
                ...state,
                hidden: !state.hidden
            }
        case 'ADD_CART_ITEM':
            return {
                ...state,
                cartItems: addItemsToCart(state.cartItems, action.payload)
            }
        case 'REMOVE_CART_ITEM':
            return {
                ...state,
                cartItems: state.cartItems.filter((cartItem)=> cartItem.id !== action.payload.id)
            }
        case 'DECREASE_CART_ITEM':
            return {
                ...state,
                cartItems: decreaseItemsToCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;