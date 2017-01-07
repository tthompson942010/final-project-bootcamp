import React from "react";
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Parent from "../components/Parent";
import Display from "../components/Display";
import Home from "../components/Home";
import LoginModal from "../components/LoginModal";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import ProfileContent from "../components/ProfileContent";
import ShowSearch from "../components/ShowSearch";
import Sidebar from "../components/Sidebar";
import SignUpModal from "../components/SignUpModal";


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