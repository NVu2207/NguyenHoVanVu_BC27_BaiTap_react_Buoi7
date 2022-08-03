import React from "react";

const GlassModel = ({ product }) => {
  if (!product) {
    return (
      <div className="Glass-Model">
        <div className="row py-5">
          <div className="col-6 position-relative">
            <img src="./glassesImage/model.jpg" alt="" className="mx-auto" />
            
            
          </div>
          <div className="col-6">
            <img src="./glassesImage/model.jpg" alt="" className="mx-auto" />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="Glass-Model">
      <div className="row py-5">
        <div className="col-6 position-relative">
          <img src="./glassesImage/model.jpg" alt="" className="mx-auto" />
          <img src={product.url} alt="" className="glass" />
          <div className="content bg-warning bg-opacity-50">
            <h1 className="text-primary">{product.name}</h1>
            <p className="text-white">{product.desc}</p>
          </div>
        </div>
        <div className="col-6">
          <img src="./glassesImage/model.jpg" alt="" className="mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default GlassModel;
