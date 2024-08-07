import NavBar from "@/components/NavBar";
import { Outlet, useNavigation } from "react-router-dom";

const LayoutPublic = () => {

    const navigation = useNavigation();
    return (
        <>
            <NavBar />
                <main className="container">
                    {navigation.state === "loading" && (
                        <p className="">Loading...</p>
                    )}
                    <Outlet />
                </main>
            <footer className="text-center">footer</footer>
        </>
    )
}

export default LayoutPublic