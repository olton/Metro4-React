import React from "react";
import "./badges.less";

export default class Badge extends React.Component {
    static defaultProps = {
        inside: false,
        inline: false,
        value: false,
        cls: ""
    };

    render(){
        const {value, inside, inline, cls} = this.props;
        const className = `badge ${inline ? 'inline' : ''} ${inside ? 'inside' : ''} ${cls}`;

        return (
            <span className={className}>
                {value !== false && (
                    <span>{value}</span>
                )}
                {this.props.children}
            </span>
        )
    }
}