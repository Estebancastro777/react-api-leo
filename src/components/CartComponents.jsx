import IconDelete from "@/icons/IconDelete"
import { useCart } from "@/hooks/useCart"

const CartItem = ({image, title, price, id, quantity, products}) => {

const {removeFromCart, updateQuantity} = useCart()

const quantityMas =()=>{
    updateQuantity(id,quantity + 1)
}

const quantityMenos=()=>{
    if (quantity > 1) {
        updateQuantity(id, quantity - 1);
    } else {
        removeFromCart(id);
    }
}

    return (
        <>
        <article className="flex flex-col items-center justify-center">
            <div key={id} className="flex gap-2 items-center justify-center text-center max-w-[70%] mb-2">
            <img className="h-18 w-10" src={image} alt={image} />
            <h3 className="text-black">{title}</h3>
            </div>
            
            <div className="flex justify-center items-center gap-4">
            <button onClick={quantityMenos} className="text-xl">
                -
            </button>
            <span className="text-black"> ${price * quantity} x {quantity}</span>
            <button onClick={quantityMas}>
                +
            </button>
            </div>

            <hr className="mb-3" />

        </article>
        </>
    )
}

const CartComponents = () => {
    const { cart, ClearCart } = useCart()

    const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);



    return (
                <article className="flex flex-col items-center gap-2 absolute left-[20%] mt-[14%] md:mt-[3%] bg-slate-100 py-8 md:right-[10%] md:left-auto rounded-lg shadow-lg">
                    {cart.length === 0 && <h3 className="m-5 text-center font-normal px-6">El carrito esta vacio</h3>}

                    {cart.length !== 0 && <p className="mb-3">CARRITO DE COMPRAS</p>}

                    <div className="max-h-64 overflow-y-auto">
                         {cart.map(products=>(
                             <CartItem key={products.id} {...products} />
                         ))}
                    </div>
                    

                    {cart.length !== 0 &&
                    <div className="flex gap-4 mx-2">
                    <button className="text-sm flex justify-center rounded-md text-white bg-slate-800 hover:bg-slate-700 py-1 px-8">
                        Comprar
                    </button>
                    <h4 >${total.toFixed(2)}</h4>
                    <button onClick={ClearCart}>
                        <IconDelete />
                    </button>
                    </div>
                    }
                </article>
    )
}

export default CartComponents