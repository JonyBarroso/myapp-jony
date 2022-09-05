import React from "react";
import { Component } from "react";

class Item extends Component {
    render() {
        return (
            <li>
                <a href="#">{this.props.valor}</a>
            </li>
        )
    }
}

export default Item;