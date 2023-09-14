import { Link, NavLink } from "react-router-dom";
import Home from "../pages/Home";

export default function Navbar({isLogIn,handleLogout}) {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container ">
                    <Link to={"/"} className="navbar-brand">Private Shop</Link>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <NavLink to={"/"} className="nav-link" >Anasayfa</NavLink>
                            <NavLink to={"/products"} className="nav-link" >Ürünler</NavLink>
                            <NavLink to={"/about"} className="nav-link" >Hakkımızda</NavLink>
                            <NavLink to={"/contact"} className="nav-link" >İletişim</NavLink>
                             {isLogIn===false ?
                                <NavLink to={"/login"} className="nav-link" >Login</NavLink>
                             :
                                <>
                                <NavLink to={"/"} className="nav-link " onClick={handleLogout} >Logout</NavLink>
                                <NavLink to="/basket" className="nav-link ">Sepet</NavLink>
                                </>
                             }

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}