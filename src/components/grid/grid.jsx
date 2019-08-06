import React from "react";
import "./grid.less";

export class Cell extends React.Component {

    static defaultProps = {
        as: "div",
        cls: ""
    };

    render() {
        const {as: Element, cls, ...props} = this.props;

        return (
            <Element className={'cell '+ cls} {...props}>
                {this.props.children}
            </Element>
        );
    }
}

export class Row extends React.Component {

    static defaultProps = {
        as: "div",
        cls: ""
    };

    render() {
        const {as: Element, cls, ...props} = this.props;

        return (
            <div className={'row ' + cls} {...props}>
                {this.props.children}
            </div>
        );
    }
}

export class Grid extends React.Component {

    static defaultProps = {
        as: "div",
        cls: ""
    };

    render() {
        const {as: Element, cls, ...props} = this.props;

        return (
            <Element className={'grid ' + cls} {...props}>
                {this.props.children}
            </Element>
        );
    }
}
