import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductInfo from "./components/ProductInfo";
import Login from "./pages/Login";

export default function SiteRoutes({handleLogin,handleLogout}){
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/product-info/:id" element={<ProductInfo />} />
            <Route path="/login" element={<Login handleLogout={handleLogout} handleLogin={handleLogin}/>} handleLogin={handleLogin} ></Route>
         
        </Routes>
        </>
    );
}
