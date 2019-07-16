import React from "react";
import "./badges.less";

export default class Badge extends React.Component {
    static defaultProps = {
        inside: false,
        inline: false
    };

    render(){
        const {inside, inline} = this.props;
        const className = `badge ${inline ? 'inline' : ''} ${inside ? 'inside' : ''}`;

        return (
            <span className={className}>{this.props.children}</span>
        )
    }
}