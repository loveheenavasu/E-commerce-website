import React, { useEffect, useState } from "react";
import Product from "./Product.tsx";
import data from "../data.json";


const Products = ({products}) => {

  return (
    <div
      className="products"
      style={{ display: "flex", flexWrap: "wrap", width: "100%" }}
    >
      {products.length === 0 ? (
        <p>
          No products available.
        </p>
      ) : (
        products.map((prdct) => (
          <Product
            key={prdct.id}
            title={prdct.title}
            description={prdct.description}
            thumbnail={prdct.thumbnail}
          />
        ))
      )}
    </div>
  );
};

export default Products;
