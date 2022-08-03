import React from "react";

const ProductItem = ({ product, addToDetail, onOpen}) => {
    const handleSelect = (product) => {
        addToDetail (product)
        onOpen ("true")
    }
  return (
    <div className="card">
      <img src={product.image} alt={product.name} width="100%" height="300px" />
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-text">{product.price}$</p>
        <button className="btn btn-dark" onClick={() => handleSelect (product)}>Details</button>
      </div>
    </div>
  );
};

export default ProductItem;