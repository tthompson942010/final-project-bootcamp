import React from "react";
import { Link } from "react-router";

class Navbar extends React.Component {
  render() {
    return(
      <nav className="navbar navbar-inverse navbar-static-top navbar-override">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand brand-override" href="#"><img alt="channelSurf" src="assets/images/channelSurf-mock-transparent-small.jpg" /></a>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li ><Link to="/">Home</Link></li>
              <li ><Link to="/profile">About</Link></li>
              <li className="dropdown"><a className="dropdown-toggle font-override" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Accounts<span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a id="signUp" href="#" data-toggle="modal" data-target="#signUpModal">Sign Up</a></li>
                  <li><a id="logIn" href="#" data-toggle="modal" data-target="#loginModal">Log In</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>	
      </nav>
    );
  }
}

export default Navbar