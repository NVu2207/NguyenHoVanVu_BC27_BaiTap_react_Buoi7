import React, { Component } from "react";
import "./Glass.css";
import data from "./dataGlasses.json";
import GlassModel from "./GlassModel";
import GlassProduct from "./GlassProduct";

 class Glass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectGlass: null,
    };
  }
  handleSelect = (glass) => {
    this.setState({ selectGlass: glass });
  };
  render() {
    const{selectGlass}=this.state
    return (
      <div className="glass-wrapper">
        <header className="text-center py-4">
          <h1 className="text-white">TRY GLASSES APP ONLINE</h1>
        </header>
        <div className="container">
          <GlassModel product={selectGlass}/>
          <GlassProduct glasses={data} onSelect={this.handleSelect} />
        </div>
      </div>
    );
  }
}
export default Glass