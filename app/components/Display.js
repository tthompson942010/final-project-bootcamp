import React from "react";

class Display extends React.Component{
  render() {
    return(
      <div id="resultsDisplay" className="col-lg-10 col-lg-offset-2">
          <h2> Results </h2>
          <div className="row">
          <div className="col-lg-3">
          <div className="panel panel-default text-center panel-dark">
              <img className="img-responsive" src="http://static-api.guidebox.com/091414/thumbnails_small/15915-794740916-208x117-show-thumbnail.jpg" />
              <h4>Brooklyn Nine-Nine</h4><i className="fa fa-plus-circle"></i>
          </div>
          </div>
          </div>
        </div>
    );
  }
}

export default Display