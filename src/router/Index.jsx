import { createBrowserRouter } from "react-router-dom";

import Home from "@/routes/Home";
import Electronics from "@/routes/Electronics";
import Jewelery from "@/routes/Jewelery";
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
                path:"/Jewerely",
                element: <Jewelery/>,
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

