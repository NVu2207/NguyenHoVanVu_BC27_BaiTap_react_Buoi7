import React from "react";
import data from "./data.json";
import ProductList from "./ProductList";
import ShoesDetails from "./ShoesDetails";

class ShoesShop extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         selectProduct:null,
         isOpen:false,
      }
    }
    handleOpen =() => {
        this.setState({isOpen:true})
     }
    handleClose =() => {
        this.setState({isOpen:false})
     }
    handleSelect =(product) => {
        this.setState({selectProduct:product})
     }
    render(){
        const {isOpen,selectProduct} = this.state
        return (
            <div className="container">
              <h1 className="text-center text-warning">Shoes Shop</h1>
        
              <ProductList products={data} onOpen = {this.handleOpen} onSelect = {this.handleSelect}/>
              <ShoesDetails isOpen = {isOpen} product = {selectProduct} onClose = {this.handleClose}/>
            </div>
          );
    }
  
};

export default ShoesShop;