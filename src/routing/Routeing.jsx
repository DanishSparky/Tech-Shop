import { Route, Routes } from 'react-router'
import Home from '../Pages/Home'
import Page_Not_Found from '../pages/Page_Not_Found'
import Cart from '../pages/Cart'
import Product_Details from '../pages/Product_Details'
import All_Products from '../pages/All_Products'

const Routeing = () => {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/productdetails" element={<Product_Details/>}/>
        <Route path="/allproducts" element={<All_Products/>}/>
        <Route path="/*" element={<Page_Not_Found/>}/>
      </Routes>
  )
}

export default Routeing
