import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ProductInfo from "./components/ProductInfo";
import Login from "./pages/Login";
import Basket from "./pages/Basket";
import PrivateRoutes from "./PrivateRoutes";
import ProductsLayout from "./components/ProductsLayout";
import CategoryPage from "./pages/CategoryPage";
import ProductsAll from "./components/ProductsAll";

export default function SiteRoutes({
    item,
    handleClick,
    user,
    handleLogin,
    handleLogout,
    userEmail,
    userPassword,
    setUserEmail,
    setUserPassword
}) {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home handleClick={handleClick} />} />
                <Route path="/products" element={<ProductsLayout item={item} handleClick={handleClick} />} >
                    <Route index={true} element={<ProductsAll item={item} handleClick={handleClick} />} />
                    <Route path="/products/category/:categoryName" element={<CategoryPage handleClick={handleClick}/>}/>
                </Route>
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product-info/:id" element={<ProductInfo item={item} handleClick={handleClick} />} />
                <Route path="/login" element={<Login handleLogout={handleLogout}
                    handleLogin={handleLogin}
                    userEmail={userEmail}
                    setUserEmail={setUserEmail}
                    userPassword={userPassword}
                    setUserPassword={setUserPassword} />} >

                </Route>
                <Route path="/basket" element={<PrivateRoutes user={user}> <Basket /> </PrivateRoutes>} ></Route>

            </Routes>
        </>
    );
}
