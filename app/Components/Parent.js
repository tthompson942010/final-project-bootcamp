import React from "react";
import Home from "./Home";
import LoginModal from "./LoginModal";
import Navbar from "./Navbar";
import SignUpModal from "./SignUpModal";

class Parent extends React.Component {
	render(){
		return(
			<div className="main-container">
				<SignUpModal />
				<LoginModal />
				<Navbar />
				<Home />
			</div>
		)
	}
}

module.exports = Parent;