import React from "react";
import "./grid.css";

export default class Row extends React.Component {

    static defaultProps = {
        dataCls: ""
    };

    render() {
        return (
            <div className={'row ' + this.props.dataCls}>
                {this.props.children}
            </div>
        );
    }
}
