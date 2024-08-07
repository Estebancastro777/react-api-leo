import { useState } from "react";
import { Link } from "react-router-dom";


import IconCart from "@/icons/IconCart";
import IconMenu from "@/icons/IconMenu";
import IconClose from "@/icons/IconClose";
// import CartComponents from "@/components/CartComponents";


const NavBar = () => {

    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const handleOpenMenu = () => {
        setIsOpenMenu(true);
    };
    const handleCloseMenu = () => {
        setIsOpenMenu(false);
    };


    return (
        
        <header className="shadow-lg my-8 pb-6 flex justify-evenly cursive font-bold text-gray-500">
        <button className="md:hidden" onClick={handleOpenMenu}>
            <IconMenu />
        </button>
        <h1 className="text-3xl"><Link to="/">STORE API</Link></h1>
            <nav className={`md:flex mt-1 gap-6 ${
                isOpenMenu
                ?"absolute z-10 flex flex-col top-0 left-0 shadow-md bg-white h-full p-8"
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
                        <Link to="/Jewerely">Jewerely</Link>
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
                <div>
                    <button className="mt-1">
                        <IconCart />
                    </button>
                </div>
                {/* <CartComponents/>     */}
        </header>
        
    )
}

export default NavBar