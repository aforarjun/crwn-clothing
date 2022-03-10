export const addItemsToCart = (allcartItems, cartItemToAdd) =>{
    const existingCartItem = allcartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if(existingCartItem){
        return allcartItems.map( cartItem =>
            cartItem.id === cartItemToAdd.id ? 
            {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    }

    return [...allcartItems, {...cartItemToAdd, quantity: 1}]
}