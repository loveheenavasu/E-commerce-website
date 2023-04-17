import React from "react";
import Product from "./Product.tsx";


const Products = ({products}) => {
  return (
    <div
      className="products"
      style={{ display: "flex", flexWrap: "wrap", width:"100%"}}
    >
      {products.length === 0 ? (
        <p>
          No products available....
        </p>
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
