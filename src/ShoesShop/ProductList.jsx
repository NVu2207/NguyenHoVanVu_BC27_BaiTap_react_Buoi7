import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products, onOpen, onSelect }) => {
    const handleOpen = ()=> {
        onOpen ();
    }
    const handleAdd = (product) => {
        onSelect(product);
    }
  return (
    <div className="row">
      {products.map((product) => {
        return (
          <div key={product.id} className="col-sm-4">
            <ProductItem product={product}  onOpen = {handleOpen} addToDetail = {handleAdd}/>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;