import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";

const LayoutPublic = () => {

    return (
        <>
            <NavBar />
                <main className="container mt-28">
                    <Outlet />
                </main>
            <Footer/>
        </>
    )
}

export default LayoutPublic