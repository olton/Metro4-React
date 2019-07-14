import React from "react";
import "./grid.css";

export class Cell extends React.Component {

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

export class Row extends React.Component {

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

export class Grid extends React.Component {

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
