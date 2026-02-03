import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";
import AllProducts from "../pages/AllProducts";

const Routings = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/products/:id" element={<ProductDetails/>}/>
                <Route path="/allproducts" element={<AllProducts/>}/>
                <Route path="*" element={<h1>Page Not Found</h1>}/>
            </Routes>
        </>
    )
}
export default Routings