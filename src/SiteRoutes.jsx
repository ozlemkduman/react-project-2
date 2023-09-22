import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ProductInfo from "./components/ProductInfo";
import Basket from "./pages/Basket";
import PrivateRoutes from "./PrivateRoutes";
import ProductsLayout from "./components/ProductsLayout";
import CategoryPage from "./pages/CategoryPage";
import ProductsAll from "./components/ProductsAll";
import Register from "./pages/Register";
import Login from "./pages/Login";

export default function SiteRoutes({
    item,
    handleClick,
    user,
    removeItemProduct
}) {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home handleClick={handleClick} user={user} />} />
                <Route path="/products" element={<ProductsLayout item={item} handleClick={handleClick} user={user} />} >
                    <Route index={true} element={<ProductsAll item={item} handleClick={handleClick} user={user} />} />
                    <Route path="/products/category/:categoryName" element={<CategoryPage handleClick={handleClick} user={user} />} />
                </Route>
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product-info/:id" element={<ProductInfo item={item} handleClick={handleClick} user={user} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/basket" element={<PrivateRoutes > <Basket removeItemProduct={removeItemProduct} /> </PrivateRoutes>} ></Route>

            </Routes>
        </>
    );
}
