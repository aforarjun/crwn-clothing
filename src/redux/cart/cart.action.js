export const toggleCard = () => ({
    type: 'TOGGLE_CART',
})

export const addItem = (item) => ({
    type: 'ADD_CART_ITEM',
    payload: item
})

export const removeItem = (item) => ({
    type: 'REMOVE_CART_ITEM',
    payload: item
})

export const decreaseCartItem = (item) =>({
    type: 'DECREASE_CART_ITEM',
    payload: item
})