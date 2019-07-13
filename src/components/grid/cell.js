import React from "react";
import "./grid.css";

export default class Cell extends React.Component {

    static defaultProps = {
        dataCls: ""
    };

    render() {
        return (
            <div className={this.props.dataCls}>
                {this.props.children}
            </div>
        );
    }
}
