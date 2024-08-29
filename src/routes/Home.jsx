import IconFav from "@/icons/IconFav";
import { useFetch } from "@/hooks/useFetch";
import { useCart } from "@/hooks/useCart";
import { useFav } from "@/hooks/useFav";
import { useState } from "react";

const Home =()=>{

    const {data} = useFetch("https://fakestoreapi.com/products")

    const {addToCart} = useCart()
    const {addToFav} = useFav()

    const [alertProductId, setAlertProductId] = useState(null)

    const handleAlert = (productId) => {
      setAlertProductId(productId)
      setTimeout(() => {
        setAlertProductId(null)
      }, 1000)
    }

    return (
            <section className="cursive grid grid-cols-2 md:ml-[19%] md:flex md:flex-wrap md:gap-4">
                {data?.map((products) =>  (
                    <div className="flex flex-col justify-between h-auto w-auto md:h-82 md:w-52 md:mx-auto mx-auto p-5 md:rounded-xl gap-10 md:border-t-2 bg-slate-100 hover:border-2 cursor-pointer" key={products.id}>
                        <img className="h-auto" key={products.image} src={products.image} alt="product" />
                        <div>
                            <h2 className="font-bold mb-2" key={products.id}>{products.title}</h2>
                            <span className="ml-5 text-xl">${products.price}</span>
                        </div>
                        <div className="flex gap-2">
                        <button onClick={()=>{addToCart(products);handleAlert(products.id)}} className="flex items-center gap-1 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 p-1 px-2 rounded-lg">
                            Agregar al carrito    
                        </button>
                        <button onClick={()=>{addToFav(products);handleAlert(products.id)}}>
                            <IconFav/>
                        </button>
                        </div>
                        {alertProductId === products.id && <span className="text-black text-xs font-bold">¡Producto agregado!</span>}
                    </div>
                ))}
            </section>
        )
    }

export default Home