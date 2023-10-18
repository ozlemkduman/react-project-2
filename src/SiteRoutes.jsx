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
import { useContext } from "react";
import { AllContext } from "./context/SiteContext";

export default function SiteRoutes() {
  const data = useContext(AllContext);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsLayout />}>
          <Route index={true} element={<ProductsAll />} />
          <Route
            path="/products/category/:categoryName"
            element={<CategoryPage />}
          />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product-info/:id" element={<ProductInfo />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/basket"
          element={
            <PrivateRoutes>
              {" "}
              <Basket />{" "}
            </PrivateRoutes>
          }
        ></Route>
      </Routes>
    </>
  );
}
