import { Link } from "react-router-dom";

const links = [
    {
        name: "Electronics",
        href: "/Electronics",
    },
    {
        name: "Jewelery",
        href:"/Jewelery",
    },    
    {
        name:"Men's clothing",
        href:"/MensClothing",
    },
    {
        name:"Women's clothing",
        href:"/WomensClothing",
    },
];

const NavHeader =()=>{
    return(
        <header className="flex justify-evenly">
            <h1>Store Api</h1>
            <nav className="flex gap-4">
            {links.map((x) => (
                <Link key={x.name} to={x.href}>{x.name}</Link>
            ))}
            </nav>
        </header>
    )
}

export default NavHeader