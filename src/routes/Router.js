import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import ItemListContainer from "../components/item-list-container/ItemListContainer";
import ItemDetailContainer from "../components/item-detail-container/ItemDetailContainer";
import Cart from "../components/cart/Cart";
import Checkout from "../components/cart/Checkout";
const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<h1>NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
