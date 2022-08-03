import React from "react";

const ShoesDetails = ({ isOpen = false, onClose, product }) => {
  if (!product) {
    //ko có sản phẩm
    return null;
  }
  return (
    <>
      <div
        style={{ display: isOpen ? "block" : "none" }}
        className="modal fade show"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Product Cart</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body row align-items-center">
              <div className="col-6">
                <img src={product.image} alt={product.name} width="100%" />
              </div>
              <div className="col-6">
                <table className="table align-middle">
                  <tbody>
                    <tr>
                      <td>Name:</td>
                      <td>{product.name}</td>
                    </tr>
                    <tr>
                      <td>Description:</td>
                      <td>{product.description}</td>
                    </tr>
                    <tr>
                      <td>Quantity:</td>
                      <td>{product.quantity}</td>
                    </tr>
                    <tr>
                      <td>Price:</td>
                      <td>${product.price}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && <div className="modal-backdrop fade show"></div>}
    </>
  );
};

export default ShoesDetails;