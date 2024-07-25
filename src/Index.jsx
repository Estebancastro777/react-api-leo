import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import Electronics from "@/routes/Electronics"
import Jewelery from "@/routes/Jewelery"
import MensClothing from "@/routes/MensClothing"
import WomensClothing from "@/routes/WomensClothing"

import NavHeader from "@/nav/NavHeader"

const Index = ()=>{
    return(
        <>
        <Router>
        <NavHeader/>
        <Routes>
            <Route path="/Electronics" element={<Electronics/>}/>
            <Route path="/Jewelery" element={<Jewelery/>}/>
            <Route path="/Mens" element={<MensClothing/>}/>
            <Route path="/Womens" element={<WomensClothing/>}/>
        </Routes>
        </Router>
        </>
    )
}

export default Index