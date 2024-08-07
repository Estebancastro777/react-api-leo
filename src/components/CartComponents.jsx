import { useState,useEffect } from "react";

const CartComponents =()=>{
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => setData(data))
        }, [])

    return(
        <article className="absolute top-[12%] md:right-[2%] md:top-[10%] bg-slate-100 p-8 px-28 rounded-lg shadow-lg">
            <div className="flex">
            <img src="" alt="img del articulo" />
            <h1>titulo</h1>
            </div>
            <div className="flex flex-col">
            <span>precio ind</span> 
            <span>$1000</span>
            </div>
        </article>
    )
}

export default CartComponents