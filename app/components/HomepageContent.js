import React from "react";
import axios from "axios";

class HomepageContent extends React.Component{

	render() {
		return(
				<div>
				<div className="row home-override">
					<div className="col-lg-5 col-sm-12 col-xs-12">
						<h1 className="home-override text-center"><strong>Welcome to channelSurf!</strong></h1>
						<ul className="home-override text-center">
							<li>Setup playlists of your favorite shows!</li>
							<li>Channels by you, for you</li>
							<li>Offering support for a number of streaming services</li>
						</ul>
					</div>
					<div className="col-md-7 hidden-xs hidden-sm">
						<img className="img-responsive" src="assets/images/channels-2.jpg" />
					</div>
					<div className="col-xs-4 col-xs-offset-4 hidden-md hidden-lg" >
						<div className="circle">
							<img className="center-logo" src="assets/images/icons/channelSurf-128.ico" />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12 about-override">
						<h1><strong>What is channelSurf?</strong></h1>
						<p> Since the advent of online streaming services for movies and tv shows, "binge-watching" has become the most popular form of watching tv, powering through entire seasons of a show at a time. Streaming services have even encouraged this, by setting autoplay on their video players to start the next episode of a show before the credits have even finished rolling! But what about the people that miss a more "classic" tv format? Or find themselves becoming bored halfway through a show, never going back to see "that totally crazy twist ending" their friends raved about?</p>
						<p> Now, there's channelSurf. By using this app, you can set your very own "Channels," playlists of shows to help keep things fresh, and bring back some anticipation to your viewing. Using multiple streaming sources to watch your shows? We can cover that! We allow for playlists that span multiple sites. Of course, if you just can't wait for the next episode of "WestWorld" on your channel, you can skip right to it, without interrupting the rest of your channel's lineup! </p>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12 col-lg-offset-0 suggestion-override ">
						<div className="row">
							<div className="col-sm-9 col-sm-offset-3 col-lg-12 col-lg-offset-0">
								<div>
									<h1>Supported Streaming Services!</h1><br />
								</div>
							</div>
						</div>
						<div className="row">					
								<div className="col-sm-12 col-md-4">
									<div className="circle">
										<img className="center-logo" src="./assets/images/icons/hulu.ico" />
									</div>
								</div>
								<div className="col-sm-12 col-md-4">
								<div className="circle">
									<img className="center-logo"  src="./assets/images/icons/hbo.ico" />
								</div>
							</div>
							<div className="col-sm-12 col-md-4">
								<div className="circle">
									<img className="center-logo"  src="./assets/images/icons/amazon.jpg" />
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 col-md-offset-4 text-center">
								<h3> ..and many more!</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default HomepageContent;