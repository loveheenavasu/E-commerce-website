import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Product from "./Product.tsx";
import { useSelector } from "react-redux";

const Products = ({ products }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [homePageProducts, setHomePageProducts] = useState([]);

  useEffect(() => {
    products.length === 0 ? setOpen(false) : setOpen(true);
  }, [products]);

  const allProducts = useSelector((state: RootState) => state.addItem);

  useEffect(() => {
    if (allProducts.length) {
      let uniqueArray = products.map((item) => {
        let cartProduct = allProducts.find(
          (_product) => item.id == _product.id
        );
        if (cartProduct) {
          return cartProduct;
        } else {
          return item;
        }
      });
      setHomePageProducts(uniqueArray);
    } else {
      setHomePageProducts(products);
    }
  }, [allProducts, products]);

  return (
    <div
      className="products"
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "auto",
        marginLeft: "6vw",
      }}
    >
      {homePageProducts?.length === 0 ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <CircularProgress color="primary" />
        </Backdrop>
      ) : (
        homePageProducts.map((prdct) => (
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
