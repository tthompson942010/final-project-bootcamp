import React from "react";

class SignUpModal extends React.Component{

	render(){
		return(
			<div className="modal fade" id="signUpModal" tabIndex="-1" role="dialog">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
							<h4 className="modal-title">Sign Up!</h4>
						</div>
						<div className="modal-body">
							<form>
								<div className="form-group">
									<label htmlFor="username">Username</label>
									<input type="username" className="form-control" id="usernameInput" />
								</div>
								<div className="form-group">
									<label htmlFor="email">Email</label>
									<input type="email" className="form-control" id="emailInput" />
								</div>
								<div className="form-group">
									<label htmlFor="password">Password</label>
									<input type="password" className="form-control" id="passwordInput" />
								</div>
								<button type="submit" className="btn btn-primary">Submit</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

module.exports = SignUpModal;