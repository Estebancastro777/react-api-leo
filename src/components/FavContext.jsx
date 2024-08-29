import {createContext, useState} from "react"

export const FavContext= createContext()

export function FavProvider({ children }) {
 
    const [fav, setFav] =useState([])

    const addToFav = product => {
        const productInFavIndex= fav.findIndex(item=> item.id === product.id)

        if (productInFavIndex >= 0 ) {
            const newFav = structuredClone(fav)
            newFav[productInFavIndex].quantity += 1
            setFav(newFav)
        }
        else 
        {
        setFav(prevState =>([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]))
    }
}
    const ClearFav = () => {
        setFav([])
    }

    const removeFromFav = (product) => {
        const productInFavIndex = fav.findIndex(item => item.id === product);
    
        if (productInFavIndex >= 0) {
            const newFav = structuredClone(fav);
    
            if (newFav[productInFavIndex].quantity > 1) {
                // Si la cantidad es mayor a 1, disminuye la cantidad
                newFav[productInFavIndex].quantity -= 1;
                setFav(newFav);
            } else {
                // Si la cantidad es 1, elimina el producto del carrito
                setFav(prevState => prevState.filter(item => item.id !== product));
            }
        }
    }

    return(
        <FavContext.Provider value={{
            fav,
            addToFav,
            ClearFav,
            removeFromFav,
        }}
        >
            {children}
        </FavContext.Provider>
    )
}