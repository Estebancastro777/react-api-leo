import Instagram from "@/icons/Instagram"
import Facebook from "@/icons/Facebook"
import Equis from "@/icons/Equis"

const Footer =()=>{
    return(
        <footer className="flex flex-col gap-2 text-center p-5">
        <p>STORE API</p>
        <ul className="flex flex-row justify-center gap-2">
            <li><Instagram/></li>
            <li><Facebook/></li>
            <li><Equis/></li>
        </ul>
        <span>Contactanos: +54 3425591079</span>
        </footer>
    )
}

export default Footer