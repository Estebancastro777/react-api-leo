import {createContext, useState} from "react"

export const CartContext= createContext()

export function CartProvider({ children }) {
 
    const [cart, setCart] =useState([])

    const addToCart = products => {
        const productInCartIndex= cart.findIndex(item=> item.id === products.id)

        if (productInCartIndex >= 0 ) {
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            setCart(newCart)
        } 
        else 
        {
        setCart(prevState =>([
            ...prevState,
            {
                ...products,
                quantity: 1
            }
        ]))
    }
}
    const ClearCart = () => {
        setCart([])
    }

    const removeFromCart = (products) => {
        const productInCartIndex = cart.findIndex(item => item.id === products);
    
        if (productInCartIndex >= 0) {
            const newCart = structuredClone(cart);
    
            if (newCart[productInCartIndex].quantity > 1) {
                // Si la cantidad es mayor a 1, disminuye la cantidad
                newCart[productInCartIndex].quantity -= 1;
                setCart(newCart);
            } else {
                // Si la cantidad es 1, elimina el producto del carrito
                setCart(prevState => prevState.filter(item => item.id !== products));
            }
        }
    }

    return(
        <CartContext.Provider value={{
            cart,
            addToCart,
            ClearCart,
            removeFromCart,
        }}
        >
            {children}
        </CartContext.Provider>
    )
}