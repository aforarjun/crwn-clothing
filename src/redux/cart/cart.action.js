export const toggleCard = () => ({
    type: 'TOGGLE_CART',
})

export const addItem = (item) => ({
    type: 'ADD_CART_ITEM',
    payload: item
})

export const removeItem = (id) => ({
    type: 'REMOVE_CART_ITEM',
    payload: id
})