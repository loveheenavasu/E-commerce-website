import "./App.css";
import Navigation from "./Components/Navigation.tsx";
import Products from "./Components/Products.tsx";
import Cart from "./Components/Cart.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "./data.json";
import Product from "./Components/Product.tsx";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data.products);
  }, [products]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={[
            <Navigation products={products} setProducts={setProducts}/>,
            <Products products={products} setProducts={setProducts}/>,
          ]}
        />
        <Route path="cart" element={<Cart/>}/>
        <Route path="product" element={<Product/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
