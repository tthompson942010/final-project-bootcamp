import React from "react";

class ShowSearchSidebar extends React.Component{
  render() {
    return(
      <div className="row">
          <div className="col-lg-12">
              <div className="text-center">
                  <h2> Add A Channel </h2>
              </div>
              <form>
                  <div className="form-group">
                      <label>Channel Title</label>
                      <input id="channelName" className="form-control" />
                  </div>
                  <div className="form-group">
                      <div className="checkbox">
                      <h5>Pick a Source</h5>
                      <label><input type="checkbox" value="hulu-plus" />(Placeholder)</label>
                      </div>
                  </div>
                  <div className="form-group">
                      <div className="checkbox">
                      <label><input type="checkbox" value="" />Coming Soon!</label>
                      </div>
                  </div>                            
                  <div className="form-group">
                      <label>Search a Show</label>
                      <input id="showSearch" className="form-control" />
                  </div>
              </form>
          </div>              
      </div>
    );
  }
}

export default ShowSearchSidebar