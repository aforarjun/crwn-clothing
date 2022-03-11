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

export const decreaseItemsToCart = (allcartItems, cartItemToDecrease) =>{
    const existingCartItem = allcartItems.find(cartItem => cartItem.id === cartItemToDecrease.id);

    if(existingCartItem.quantity === 1){
        return allcartItems.filter( cartItem => cartItem.id !== cartItemToDecrease.id )
    }

    return allcartItems.map(cartItem => (
        cartItem.id === cartItemToDecrease.id
        ? 
        { ...cartItem, quantity: cartItem.quantity - 1 }
        : 
        cartItem
    ))
}