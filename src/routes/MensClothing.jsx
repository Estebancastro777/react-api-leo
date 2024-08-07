import { useState, useEffect } from "react";
import IconFav from "@/icons/IconFav";

const MensClothing =()=>{

    const [data, setData]= useState(null);

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((response)=>response.json())
        .then((data)=> setData(data.slice(0,4)))
    }, [])

    return (
        <section className="cursive md:ml-[19%] flex flex-wrap gap-4">
            {data?.map((products) => (
                <div className="flex flex-col justify-between h-82 w-52 md:mx-auto mx-auto p-5 rounded-xl gap-10 border-t-2 bg-slate-100 hover:border-2 cursor-pointer" key={products.id}>
                    <img className="h-24" key={products.image} src={products.image} alt="product" />
                    <div>
                        <h2 className="font-bold mb-2" key={products.id}>{products.title}</h2>
                        <span className="ml-5 text-xl">${products.price}</span>
                    </div>
                    <div className="flex gap-2">
                        <button className=" text-white font-bold bg-slate-800 hover:bg-slate-700 p-1 px-2 rounded-lg">Agregar al carrito</button>
                        <button>
                            <IconFav/>
                        </button>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default MensClothing