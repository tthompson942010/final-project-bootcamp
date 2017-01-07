import React from "react";
import Home from "./Home";
import LoginModal from "./LoginModal";
import Navbar from "./Navbar";
import SignUpModal from "./SignUpModal";
import Sidebar from "./Sidebar";
import Display from "./Display";

class Parent extends React.Component {
	render() {
		return(
			<div className="main-container">
        <h1> Hello World!</h1>
			</div>
		);
	}
}

export default Parent