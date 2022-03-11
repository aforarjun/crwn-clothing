import { createSelector } from 'reselect'

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulaedQuantity, cartItem) => accumulaedQuantity + cartItem.quantity, 0)
)

export const selectCartTotalPrice = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulaedQuantity, cartItem) => accumulaedQuantity + cartItem.quantity * cartItem.price, 0)
)

export const selectCartHiden = createSelector(
    [selectCart],
    cart => cart.hidden
)
