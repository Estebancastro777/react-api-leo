import IconFav from "@/icons/IconFav";

import { useFetch } from "@/hooks/useFetch";
import {useCart} from "@/hooks/useCart"
import { useFav } from "@/hooks/useFav";

const Jewelry =()=>{
    const {data: products} = useFetch("https://fakestoreapi.com/products")
    const filterProduct = products?.filter(product=>product.category==="jewelery")

    const {addToCart} = useCart()
    const {addToFav} = useFav()

    return (
        <section className="cursive grid grid-cols-2 gap-4 md:ml-[19%] md:flex md:flex-wrap md:gap-4">
            {filterProduct?.map((products) => (
                <div className="flex flex-col justify-between h-82 w-52 md:mx-auto mx-auto p-5 rounded-xl gap-10 border-t-2 bg-slate-100 hover:border-2 cursor-pointer" key={products.id}>
                    <img className="h-auto" key={products.image} src={products.image} alt="product" />
                    <div>
                        <h2 className="font-bold mb-2" key={products.id}>{products.title}</h2>
                        <span className="ml-5 text-xl">${products.price}</span>
                    </div>
                    <div className="flex gap-2">
                    <button onClick={()=>addToCart(products)} className="flex items-center gap-1 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 p-1 px-2 rounded-lg">Agregar al carrito</button>
                    <button onClick={()=>addToFav(products)}>
                        <IconFav/>
                    </button>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Jewelry