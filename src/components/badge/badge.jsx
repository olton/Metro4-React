import React from "react";
import "./badges.less";

export default class Badge extends React.Component {
    static defaultProps = {
        inside: false,
        inline: false,
        value: false,
        cls: "",
        className: ""
    };

    render(){
        const {value, inside, inline, cls, className} = this.props;
        const classBadge = `badge ${inline ? 'inline' : ''} ${inside ? 'inside' : ''} ${cls} ${className}`;

        return (
            <span className={classBadge}>
                {value !== false && (
                    <span>{value}</span>
                )}
                {this.props.children}
            </span>
        )
    }
}