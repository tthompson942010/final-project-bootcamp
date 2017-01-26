import React from "react";
import axios from "axios";

class ProfileContent extends React.Component{

	render() {
		return(
			<div id="channelDisplay" className="col-lg-10 col-lg-offset-2">
				<div className="row">
					<div className="col-lg-12">
						<h1> Your Channels </h1>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4">
						<div  className="panel panel-dark text-center">
							<h3 className="channel-header">Classic Sitcoms</h3>
							<div id="channel1" className="carousel slide" data-ride="carousel">
							  <div className="carousel-inner" role="listbox">
							    <div className="item active">
							      <img className="img-responsive" src="http://static-api.guidebox.com/thumbnails_small/1737-3749269745-208x117.jpg" />
							    </div>

							    <div className="item">
							      <img className="img-responsive" src="http://static-api.guidebox.com/120214/thumbnails_small/962-1665245979-208x117.jpg" />
							    </div>

							    <div className="item">
							      <img className="img-responsive" src="http://static-api.guidebox.com/thumbnails_small/1749-2641181946-208x117.jpg" />
							    </div>

							    <div className="item">
							      <img className="img-responsive" src="http://static-api.guidebox.com/thumbnails_small/1253-6326494841-208x117.jpg" />
							    </div>
							  </div>

							  <a className="left carousel-control" href="#channel1" role="button" data-slide="prev">
							    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
							    <span className="sr-only">Previous</span>
							  </a>
							  <a className="right carousel-control" href="#channel1" role="button" data-slide="next">
							    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
							    <span className="sr-only">Next</span>
							  </a>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="panel panel-dark text-center">
							<h3 className="channel-header">Dramas</h3>
							<div id="channel2" className="carousel slide" data-ride="carousel">
							  <div className="carousel-inner" role="listbox">
							    <div className="item active">
							      <img className="img-responsive" src="http://static-api.guidebox.com/thumbnails_small/7135-9287152509-208x117.jpg" />
							    </div>

							    <div className="item">
							      <img className="img-responsive" src="http://static-api.guidebox.com/091414/thumbnails_small/8523-2963484465-208x117-show-thumbnail.jpg" />
							    </div>

							    <div className="item">
							      <img className="img-responsive" src="http://static-api.guidebox.com/111615/thumbnails_small/37380-4790200656-208x117-show-thumbnail.jpg" />
							    </div>

							    <div className="item">
							      <img className="img-responsive" src="http://static-api.guidebox.com/091716/thumbnails_small/38948-5313766976-208x117-show-thumbnail.jpg" />
							    </div>
							  </div>

							  <a className="left carousel-control" href="#channel2" role="button" data-slide="prev">
							    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
							    <span className="sr-only">Previous</span>
							  </a>
							  <a className="right carousel-control" href="#channel2" role="button" data-slide="next">
							    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
							    <span className="sr-only">Next</span>
							  </a>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="panel panel-dark text-center">
							<h3 className="channel-header">Seriously Hilarious</h3>
							<div id="channel3" className="carousel slide" data-ride="carousel">
							  <div className="carousel-inner" role="listbox">
							    <div className="item active">
							      <img className="img-responsive" src="http://static-api.guidebox.com/thumbnails_small/207-7147074262-208x117.jpg" />
							    </div>

							    <div className="item">
							      <img className="img-responsive" src="http://static-api.guidebox.com/091414/thumbnails_small/208-9493863498-208x117-show-thumbnail.jpg" />
							    </div>

							    <div className="item">
							      <img className="img-responsive" src="http://static-api.guidebox.com/041014/thumbnails_small/16279-8828293541-208x117.jpg" />
							    </div>

							    <div className="item">
							      <img className="img-responsive" src="http://static-api.guidebox.com/thumbnails_small/205-5041042548-208x117.jpg" />
							    </div>
							  </div>

							  <a className="left carousel-control" href="#channel3" role="button" data-slide="prev">
							    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
							    <span className="sr-only">Previous</span>
							  </a>
							  <a className="right carousel-control" href="#channel3" role="button" data-slide="next">
							    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
							    <span className="sr-only">Next</span>
							  </a>
							</div>
						</div>

					</div>										
				</div>
			</div>
	);
	}
}

export default ProfileContent