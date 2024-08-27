import { createBrowserRouter } from "react-router-dom";

import Home from "@/routes/Home";
import Electronics from "@/routes/Electronics";
import Jewelry from "@/routes/Jewelry";
import MensClothing from "@/routes/MensClothing";
import WomensClothing from "@/routes/WomensClothing";

import NotFound from "@/NotFound";
import LayoutPublic from "@/layout/LayoutPublic";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<LayoutPublic/>,
        errorElement:<NotFound/>,
        children:[
            {
                index: true,
                element: <Home/>,
            },
            {
                path:"/Electronics",
                element: <Electronics/>,
            },
            {
                path:"/Jewelry",
                element: <Jewelry/>,
            },
            {
                path:"/MensClothing",
                element: <MensClothing/>,
            },
            {
                path:"/WomensClothing",
                element: <WomensClothing/>,
            }
        ]
    }
]);

