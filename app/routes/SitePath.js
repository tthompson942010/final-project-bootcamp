import React from "react";
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Parent from "../components/Parent";

import HomeLayout from "../components/HomeLayout";
import HomepageContent from "../components/HomepageContent";
import Modal from "../components/Modal";
import SignUpModalContent from "../components/SignUpModalContent";
import LoginModalContent from "../components/LoginModalContent";

import ProfileLayout from "../components/ProfileLayout";
import Sidebar from "../components/Sidebar";
import ProfileSidebar from "../components/ProfileSidebar";
import ShowSearchSidebar from "../components/ShowSearchSidebar";
import ProfileContent from "../components/ProfileContent";
import ShowSearchResults from "../components/ShowSearchResults";

class SitePath extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route component={Parent}>
          <Route component={HomeLayout}>
            <Route path="/" components={{content: HomepageContent, modal: Modal}}>
              <Route path="login" component={LoginModalContent} />
              <Route path="signup" component={SignUpModalContent} />
            </Route>
          </Route>
          <Route component={ProfileLayout}>
            <Route path="/profile" components={{sidebarContent: ProfileSidebar, content: ProfileContent}} />
            <Route path="/addchannel" components={{sidebarContent: ShowSearchSidebar, content: ShowSearchResults}} />
          </Route>
        </Route>
      </Router>
    );
  }
}

export default SitePath