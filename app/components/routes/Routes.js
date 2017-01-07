import React from "react";
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Parent from "./Parent";
import Display from "./Display";
import Home from "./Home";
import LoginModal from "./LoginModal";
import Navbar from "./Navbar";
import Profile from "./Profile";
import ProfileContent from "./ProfileContent";
import ShowSearch from "./ShowSearch";
import Sidebar from "./Sidebar";
import SignUpModal from "./SignUpModal";


class Routes extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" components = {Parent}>
          <IndexRoute components={{navigation: Navbar, content: Home}} />
          <Route path="profile" components={{navigation: Navbar, sidebar: Sidebar, sidecontent: ProfileContent}} />
        </Route>
      </Router>
    );
  }
}

export default Routes