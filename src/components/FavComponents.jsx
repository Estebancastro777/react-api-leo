import IconDelete from "@/icons/IconDelete"
import { useFav } from "@/hooks/useFav"
import { useCart } from "@/hooks/useCart"

const FavItem = ({image, title, price, id}) => {

const {removeFromFav} = useFav()

    return (
        <>
            <div key={id} className="flex gap-2 items-center justify-between">
            <img className="h-18 w-10" src={image} alt={image} />
            <h3 className="text-black">{title}</h3>
            <button onClick={() => removeFromFav(id)}>
                <IconDelete />
            </button>
            </div>
            <span className="text-black flex justify-center mb-2"> ${price}</span>
            <hr className="mb-3" />

        </>
    )
}

const FavComponents = () => {
    const { fav, ClearFav } = useFav()
    const {addToCart} = useCart()

    const handleAddAllToCart = () => {
        fav.forEach(product => {
            addToCart(product);
        });
    }

    return (
                <article className="flex flex-col items-center gap-2 absolute top-[12%] md:right-[2%] md:top-[10%] left-0 md:left-auto bg-slate-100 py-8 px-20 rounded-lg shadow-lg">
                    {fav.length === 0 && <h3 className="m-5 font-normal">No tienes productos en tus favoritos</h3>}

                    {fav.length !==0 && <p className="mb-3">FAVORITOS</p>}

                    <div>
                         {fav.map(product=>(
                             <FavItem key={product.id} {...product} />
                         ))}
                    </div>

                    {fav.length !== 0 &&
                    <div className="relative md:ml-40 grid grid-cols-2 gap-4">
                    <button className="text-sm px-4 rounded-md text-white bg-slate-800 hover:bg-slate-700 py-1" onClick={handleAddAllToCart} >
                        Añadir productos al carrito
                    </button>
                    <button className="absolute right-0" onClick={ClearFav}>
                        <IconDelete />
                    </button>
                    </div>
                    }
                </article>
    )
}

export default FavComponents