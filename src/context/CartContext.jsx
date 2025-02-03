import React, { createContext, useContext, useState } from 'react'
const CartContext = createContext()
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    function addToCart(item) {
        let checkItem = cart.filter(items => items.id == item.id)
        if (checkItem.length == 0) {
            setCart((prevItem) => [
                ...prevItem, item
            ])
        } else {
            checkItem.map((i) => {
                i.quanlity++
                setCart((prevItem) => [
                    ...prevItem
                ])
            })
        }
    }

    function incQty(id) {
        cart.map((i) => {
            if (i.id == id) {
                i.quanlity++
                setCart((prevItem) => [
                    ...prevItem
                ])
            }
        })
    }

    function decQty(id) {
        cart.map((i) => {
            if (i.id == id) {
                if (i.quanlity == 1) {
                    const newArray = cart.filter(i => i.id !== id)
                    setCart(newArray)
                } else {
                    i.quanlity--
                    setCart((prevItem) => [
                        ...prevItem
                    ])
                }
            }
        })
    }

    function removeItem(id) {
        const newArray = cart.filter(i => i.id !== id)
        setCart(newArray)
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                incQty,
                decQty,
                removeItem
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
export const useShoesContext = () => useContext(CartContext)