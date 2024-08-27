import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Outlet, useNavigation } from "react-router-dom";

const LayoutPublic = () => {

    const navigation = useNavigation();
    return (
        <>
            <NavBar />
                <main className="container">
                    {navigation.state === "loading" && <p className="">Loading...</p>}
                    <Outlet />
                </main>
            <Footer/>
        </>
    )
}

export default LayoutPublic