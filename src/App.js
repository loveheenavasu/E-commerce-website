import "./App.css";
import Navigation from "./Components/Navigation.tsx";
import Products from "./Components/Products.tsx";
import Cart from "./Components/Cart.tsx";
import SingleProduct from "./Components/SingleProduct.tsx";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useEffect, useState } from "react";
import data from "./data.json";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Pagination } from "@mui/material";
import usePagination from "./Pagination/pagination.tsx";
import UserModal from "./Components/Modal.tsx";
import Footer from "./Components/Footer.tsx";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);


  useEffect(() => {
    setProducts(data.products.slice(0,8));
  }, []);


  const _DATA = usePagination(data, 8,page);

  const handleChange = (e,value) =>{
    setPage(value);
    _DATA.jump();
    const currentData = _DATA.currentData();
    setProducts(currentData)
  }

  return (
    <BrowserRouter>
      <ToastContainer style={{marginTop:"2%"}}/>
      <Navigation setProducts={setProducts}/>
      <Routes>
        <Route
          path="/"
          element={[
            <Products products={products} setProducts={setProducts} />,
            products.length  && <Pagination
            count={5}
            page={page}
            color="primary"
            style={{
              display: "flex",
              justifyContent: "center",
              margin:"12px",
              marginTop:"15px",
            }}
            onChange={handleChange}
            shape="rounded"
            size="large"
          />,
          products.length && <Footer/>
        ]}
        />
        <Route path="cart" element={<Cart/>} />
        <Route path="singleproduct/:id" element={<SingleProduct/>}/>
        <Route path="modal" element={<UserModal/>}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
