import React, { Component } from "react";
import './button.css';

class Button extends Component{
  render() {
    return(
        <button
            onClick={this.props.changeCounter}
            style={{ color: this.props.color ? this.props.color : '#444'}}
        >
            {
                this.props.label
            }
        </button>
    )
  }
}

export default Button;