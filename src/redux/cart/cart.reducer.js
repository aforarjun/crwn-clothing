import { toggleCard } from "./cart.action";
import { addItemsToCart } from "./cart.utiles";

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
            return {}
        default:
            return state;
    }
}

export default cartReducer;