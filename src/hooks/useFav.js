import { useContext } from "react";
import { FavContext } from "@/components/FavContext";

export const useFav =()=>{
    const fav = useContext(FavContext)

    if (fav===undefined){
        throw new Error("useFav must be used within a FavProvider")
        
    }

    return fav
}