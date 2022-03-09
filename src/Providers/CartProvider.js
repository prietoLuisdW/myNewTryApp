import { useState } from "react";
import { CartContext } from "../Contexts/CartContext";

export function CartProvider({children}){
    const [CartItems, setCartItems] = useState([])

    const contextValue ={
        items: CartItems,
        get length () {
            return CartItems.reduce((r, item) => r + item.quantity, 0)
        },
        getItem(cartItemId){
            return CartItems.find((cartItem)=>cartItemId.id===cartItemId)
        },
        clear(){
            setCartItems([])
        },
        removeItem(cartItemId){
            setCartItems((currentItems)=>{
                return currentItems.filter((cartItem)=>cartItem.id !==cartItemId)
            })
        },
        addItem(newCartItem){
            setCartItems((currentItems)=>{
                const clonedItems = [...currentItems]
                const itemIndex = clonedItems.findIndex(
                    (cartItem)=>cartItem.id === newCartItem.id
                )

                if (itemIndex === -1){
                    clonedItems.push(newCartItem)
                } else {
                    clonedItems[itemIndex] = newCartItem
                }

                return clonedItems
            })
        },
    }

    return (
        <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
    )
}