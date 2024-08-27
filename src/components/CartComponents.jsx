import IconDelete from "@/icons/IconDelete"
import { useCart } from "@/hooks/useCart"

const CartItem = ({image, title, price, id, quantity}) => {

const {removeFromCart} = useCart()

    return (
        <>
            <div key={id} className="flex gap-2 items-center justify-between">
            <img className="h-18 w-10" src={image} alt={image} />
            <h3 className="text-black">{title}</h3>
            <button onClick={() => removeFromCart(id)}>
                <IconDelete />
            </button>
            </div>
            <span className="text-black flex justify-center mb-2"> ${price * quantity} x {quantity}</span>
            <hr className="mb-3" />

        </>
    )
}

const CartComponents = () => {
    const { cart, ClearCart } = useCart()

    const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);



    return (
                <article className="flex flex-col items-center gap-2 absolute top-[12%] md:right-[2%] md:top-[10%] bg-slate-100 py-8 px-24 left-0 md:left-auto rounded-lg shadow-lg">
                    {cart.length === 0 && <h3 className="m-5 text-center font-normal px-6">El carrito esta vacio</h3>}

                    {cart.length !== 0 && <p className="mb-3">CARRITO DE COMPRAS</p>}

                    <div>
                         {cart.map(products=>(
                             <CartItem key={products.id} {...products} />
                         ))}
                    </div>
                    

                    {cart.length !== 0 &&
                    <div className="md:ml-[17%] ml-6 grid grid-cols-3 gap-4">
                    <button className="text-sm flex justify-center rounded-md text-white bg-slate-800 hover:bg-slate-700 py-1 px-8">
                        Comprar
                    </button>
                    <h4 className="mt-1 ml-3 md:ml-0 md:px-2">${total.toFixed(2)}</h4>
                    <button className="mb-1 ml-5 md:ml-0" onClick={ClearCart}>
                        <IconDelete />
                    </button>
                    </div>
                    }
                </article>
    )
}

export default CartComponents