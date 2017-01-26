import React from "react";

class HomeLayout extends React.Component {
  render() {
    return(
      <div className="row">
        {this.props.modal}
        {this.props.content}
      </div>
    );
  }
}

export default HomeLayout