// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";
import Router from "react-router";

import Parent from "./Components/Parent";
import Navbar from "./Components/Navbar";
import components from "./Components";

ReactDOM.render(

	/*Here we dump all of the components into a single main-container*/
	/*Again, treat them like they are any other HTML elements.*/

	<Parent>
		<Navbar>
			<Router>
				<Route path="/" component={components.Home} />
			</Router>
		</Navbar>
	</Parent>,
	document.getElementById('app')
)
