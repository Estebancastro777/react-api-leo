import { useState } from "react";
import { Link } from "react-router-dom";


import IconCart from "@/icons/IconCart";
import IconMenu from "@/icons/IconMenu";
import IconClose from "@/icons/IconClose";
import CartComponents from "@/components/CartComponents";
import IconFav from "@/icons/IconFav";
import FavComponents from "@/components/FavComponents";


const NavBar = () => {

    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const handleOpenMenu = () => {
        setIsOpenMenu(true);
    };
    const handleCloseMenu = () => {
        setIsOpenMenu(false);
    };

    const [openCart, setIsOpenCart] = useState(false)

    const [openFav, setIsOpenFav] = useState(false)


    return (
        
        <header className={`w-full bg-white top-0 shadow-lg mb-8 py-6 flex justify-evenly cursive font-bold text-gray-500
            ${isOpenMenu
                ? "h-full"
                : "fixed"
            }`}>
        <button className="md:hidden" onClick={handleOpenMenu}>
            <IconMenu />
        </button>
        <h1 className="text-3xl"><Link to="/">STORE API</Link></h1>
            <nav className={`md:flex mt-1 gap-6 ${
                isOpenMenu
                ?"absolute z-50 flex flex-col top-0 left-0 shadow-md bg-white h-full p-8"
                :"hidden"
            }`}>
                    <div className="md:hidden mb-8 cursor-pointer" onClick={handleCloseMenu}>
                        <IconClose />
                    </div>
                    <li className="group grid col-span-1">
                        <Link to="/Electronics">Electronics</Link>
                        <span className="mt-1 transition-all duration-700 group-hover:bg-slate-700 h-2"></span>
                    </li>
                    <li className="group grid col-span-1">
                        <Link to="/Jewelry">Jewelry</Link>
                        <span className="mt-1 transition-all duration-700 group-hover:bg-slate-700 h-2"></span>
                    </li>
                    <li className="group grid col-span-1">
                        <Link to="/MensClothing">Mens Clothing</Link>
                        <span className="mt-1 transition-all duration-700 group-hover:bg-slate-700 h-2"></span>
                    </li>
                    <li className="group grid col-span-1">
                        <Link to="/WomensClothing">Womens Clothing</Link>
                        <span className="mt-1 transition-all duration-700 group-hover:bg-slate-700 h-2"></span>
                    </li>
            </nav>
                <div className="flex gap-10 mb-3">
                    <button onClick={()=>setIsOpenCart(!openCart)} className="mt-1">
                        <IconCart />
                    </button>
                { openCart && <CartComponents/> }
                
                    <button onClick={()=>setIsOpenFav(!openFav)} className="mt-1">
                        <IconFav />
                    </button>
                { openFav && <FavComponents/> }
                </div>
        </header>
        
    )
}

export default NavBar