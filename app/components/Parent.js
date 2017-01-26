import React from "react";
import Navbar from "./Navbar";

class Parent extends React.Component {
  render() {
    return(
      <div className="main-container">
        <Navbar />
        <div className="container-fluid">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Parent