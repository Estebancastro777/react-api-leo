import IconFav from "@/icons/IconFav";
import { useFetch } from "@/hooks/useFetch";
import { useCart } from "@/hooks/useCart";
import { useFav } from "@/hooks/useFav";
import { useState } from "react";

const Home = () => {
  const { data } = useFetch("https://fakestoreapi.com/products");

  const { cart, addToCart, updateQuantity } = useCart(); // Agregamos `cart` para acceder a las cantidades
  const { addToFav } = useFav();

  const [alertProductId, setAlertProductId] = useState(null);


  // Estado para manejar qué producto tiene los botones de cantidad visibles
  const [visibleQuantities, setVisibleQuantities] = useState({});

  // Función para obtener la cantidad del producto en el carrito
  const getProductQuantity = (productId) => {
    const productInCart = cart.find((item) => item.id === productId);
    return productInCart ? productInCart.quantity : 0;
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setVisibleQuantities((prev) => ({ ...prev, [product.id]: true }));
  };

  const handleIncreaseQuantity = (product) => {
    updateQuantity(product.id, getProductQuantity(product.id) + 1);
  };

  const handleDecreaseQuantity = (product) => {
    const currentQuantity = getProductQuantity(product.id);
    if (currentQuantity > 1) {
      updateQuantity(product.id, currentQuantity - 1);
    } else {
      setVisibleQuantities((prev) => ({ ...prev, [product.id]: false }));
    }
  };

  const handleAlert = (productId) => {
    setAlertProductId(productId);
    setTimeout(() => {
      setAlertProductId(null);
    }, 1000);
  };

  return (
    <section className="cursive grid grid-cols-2 md:ml-[19%] md:flex md:flex-wrap md:gap-4">
      {data?.map((product) => (
        <div
          className="flex flex-col justify-between h-auto w-auto md:h-82 md:w-52 md:mx-auto mx-auto p-5 md:rounded-xl gap-10 md:border-t-2 bg-slate-100 hover:border-2 cursor-pointer"
          key={product.id}
        >
          <img className="h-auto" src={product.image} alt="product" />
          <div>
            <h2 className="font-bold mb-2">{product.title}</h2>
            <span className="ml-5 text-xl">${product.price}</span>
          </div>
          <div className="flex justify-center gap-5">
            {visibleQuantities[product.id] ? (
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleDecreaseQuantity(product)}
                  className="text-xl font-bold text-white bg-slate-800 hover:bg-slate-700 px-2 rounded-lg"
                >
                  -
                </button>
                <span className="text-sm font-bold">{getProductQuantity(product.id)}</span>
                <button
                  onClick={() => handleIncreaseQuantity(product)}
                  className="text-lg font-semibold text-white bg-slate-800 hover:bg-slate-700  px-2 rounded-lg"
                >
                  +
                </button>
              </div>
            ) : (
              <button
                onClick={() => handleAddToCart(product)}
                className="flex items-center gap-1 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 p-1 px-2 rounded-lg"
              >
                Agregar al carrito
              </button>
            )}
            <button onClick={() => {addToFav(product);handleAlert(product.id)}}>
              <IconFav />
            </button>
          </div>
          {alertProductId === product.id && (
            <span className="text-black text-xs font-bold">
              ¡Agregado a favoritos!
            </span>
            )}
        </div>
      ))}
    </section>
  );
};

export default Home;