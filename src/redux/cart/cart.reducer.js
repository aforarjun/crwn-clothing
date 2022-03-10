import { toggleCard } from "./cart.action";

const INITIAL_STATE = {
    hidden: true
}

const cartReducer = (state=INITIAL_STATE, action = toggleCard) =>{
    switch (action.type) {
        case 'TOGGLE_CART':
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
}

export default cartReducer;