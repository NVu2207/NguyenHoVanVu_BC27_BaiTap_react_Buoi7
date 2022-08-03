import React from "react";

const GlassProduct = ({ glasses, onSelect }) => {
    const handleSelect = (glass) => {
        onSelect(glass)
    }
  return (
    <div className="GlassProduct">
      <div className="row bg-white px-3 py-5">
        {glasses.map((glass) => {
          return (
            <div className="col-2" key={glass.id}>
              <div onClick={()=>handleSelect(glass)} className="img border border-dark" style={{cursor:"pointer"}}>
                <img src={glass.url} alt={glass.name} width="100%" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GlassProduct;
