import React from "react";

class ProfileSidebar extends React.Component {
  render() {
    return(
      <div className="row">
        <div className="col-lg-12">
          <div className="circle2">
            <i className=" center-logo fa fa-user fa-5x"></i>
          </div>
        </div>
        <div className="col-lg-12 text-center">
          <h2>Welcome Back (Placeholder)</h2>
        </div>
        <div className="col-lg-12">
          <h4>Your Sources:</h4>
          <div className="srclist">
            <img className="small-logo" src="../public/assets/images/icons/hulu.ico" />
            <p>Hulu Plus</p>
          </div>
        </div>
        <div className="col-lg-12">
          <div id="sourcesearch" className="input-group">
            <span className="input-group-btn">
              <button className="btn btn-default" type="button">Add</button>
            </span>
            <input type="text" className="form-control" placeholder="Add a Source" />
          </div> 
        </div>				
      </div>
    );
  }
}

export default ProfileSidebar