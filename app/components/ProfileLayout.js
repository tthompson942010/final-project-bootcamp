import React from "react";
import Sidebar from "./Sidebar";

class ProfileLayout extends React.Component {
  render() {
    return(
      <div className="row">
        <div id="sideBlock" className="col-lg-2 affix">
          {this.props.sidebarContent}
        </div>
        {this.props.content}
      </div>
    );
  }
}

export default ProfileLayout;