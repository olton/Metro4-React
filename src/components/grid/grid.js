import React from "react";
import "./grid.css";

export default class Grid extends React.Component {

    static defaultProps = {
        dataCls: ""
    };

    render() {
        return (
            <div className={'grid ' + this.props.dataCls}>
                {this.props.children}
            </div>
        );
    }
}
