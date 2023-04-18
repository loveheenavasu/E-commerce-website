import React, { useEffect, useState } from "react";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Product from "./Product.tsx";


const Products = ({products}) => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    products.length === 0 ? setOpen(false) :setOpen(true) 
  }, [products])

  return (
    <div
      className="products"
      style={{ display: "flex", flexWrap: "wrap", width:"auto",marginLeft:"6vw"}}
    >
      {products.length === 0 ? (
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      ) : (
        products.map((prdct) => (
         <Product
            key={prdct.id}
            id={prdct.id}
            title={prdct.title}
            description={prdct.description}
            thumbnail={prdct.thumbnail}
            prdct={prdct}
          />
        ))
      )}
    </div>
  );
};

export default Products;
