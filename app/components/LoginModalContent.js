import React from "react";

class LoginModalContent extends React.Component{
	render() {
		return(
			<div className="modal-content">
				<div className="modal-header">
					<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 className="modal-title">Log In!</h4>
				</div>
				<div className="modal-body">
					<p>One fine body</p>
				</div>
				<div className="modal-footer">
					<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
					<button type="button" className="btn btn-primary">Save changes</button>
				</div>
			</div>
		);
	}
}

export default LoginModalContent