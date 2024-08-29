import IconDelete from "@/icons/IconDelete"
import { useFav } from "@/hooks/useFav"
import { useCart } from "@/hooks/useCart"
import { useState } from "react"

const FavItem = ({image, title, price, id}) => {

const {removeFromFav} = useFav()

    return (
        <>
        <article className="flex flex-col items-center">
        <div key={id} className="flex gap-2 items-center justify-between max-w-[70%] mb-2">
            <img className="h-18 w-10" src={image} alt={image} />
            <h3 className="text-black">{title}</h3>
            <button onClick={() => removeFromFav(id)}>
                <IconDelete />
            </button>
        </div>

        <span className="text-black flex justify-center mb-2"> ${price}</span>
        <hr className="mb-3 mx-10" />

        </article>
        </>
    )
}

const FavComponents = () => {
    const { fav, ClearFav } = useFav()
    const {addToCart} = useCart()

    const [showAlert, setShowAlert] = useState(false);

    const handleAddAllToCart = () => {
        setShowAlert(true)
        setTimeout(()=>{
            setShowAlert(false)
        }, 1000) 

        fav.forEach(product => {
            addToCart(product);
        });
    }

    return (
                <article className="flex flex-col items-center gap-2 absolute mt-[14%] md:mt-[3%] bg-slate-100 py-8 left-[16%] md:right-[10%] md:left-auto rounded-lg shadow-lg">
                    {fav.length === 0 && <h3 className="m-5 font-normal">No tienes productos en tus favoritos</h3>}

                    {fav.length !==0 && <p className="mb-3">FAVORITOS</p>}

                    <div className="max-h-64 overflow-y-auto scroll-m-1">
                         {fav.map(product=>(
                             <FavItem key={product.id} {...product} />
                         ))}
                    </div>

                    {fav.length !== 0 &&
                    <div className="flex gap-4 mx-2">
                    <button className="text-sm px-4 rounded-md text-white bg-slate-800 hover:bg-slate-700 py-1" onClick={handleAddAllToCart} >
                        Añadir productos al carrito
                    </button>
                    <button onClick={ClearFav}>
                        <IconDelete />
                    </button>
                    </div>
                    }
                    {showAlert && <p className="text-black text-xs mx-2">¡Agregaste tus productos al carrito!</p>}
                </article>
    )
}

export default FavComponents