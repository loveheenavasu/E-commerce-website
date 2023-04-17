import "./App.css";
import Navigation from "./Components/Navigation.tsx";
import Products from "./Components/Products.tsx";
import Cart from "./Components/Cart.tsx";
import SingleProduct from "./Components/SingleProduct.tsx";

import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import data from "./data.json";

function App() {
  const [products, setProducts] = useState([]);

  const {id} = useParams()

  useEffect(() => {
    setProducts(data.products);
  }, []);

  return (
    <BrowserRouter>
      <Navigation products={products} setProducts={setProducts}/>,
      <Routes>
        <Route
          path="/"
          element={[
            <Products products={products} setProducts={setProducts}/>,
          ]}
        />
        <Route path="cart" element={<Cart/>}/>
        <Route path='singleproduct/:id' element={<SingleProduct/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
