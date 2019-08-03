import React from "react";
import "./hero.less";

export default class Hero extends React.Component {
    static defaultProps = {
        as: "div",
        cls: ""
    };

    render(){
        const {as: Element, cls} = this.props;

        return (
            <Element className={'hero ' + cls}>
                {this.props.children}
            </Element>
        )
    }
}