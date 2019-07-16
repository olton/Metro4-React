import React from "react";
import "./badges.less";

export default class Badge extends React.Component {
    static defaultProps = {
        dataInside: false,
        dataInline: false
    };

    render(){
        const {dataInside, dataInline} = this.props;
        const className = `badge ${dataInline ? 'inline' : ''} ${dataInside ? 'inside' : ''}`;

        return (
            <span className={className}>{this.props.children}</span>
        )
    }
}