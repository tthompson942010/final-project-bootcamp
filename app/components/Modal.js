import React from "react"

class Modal extends React.Component {
  render(){
    return(
      <div className="modal fade" id="modal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          {this.props.children}
        </div>
      </div>

    )
  }
}

export default Modal