import React from "react";
import { Component } from "react";

class Input extends Component {
    render() {
        return (
            <input type="text" className="form-control" placeholder={this.props.valor} />
        )
    }
}

export default Input;