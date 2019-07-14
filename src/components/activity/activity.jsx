import React from "react";
import Ring from "./ring.jsx";
import Metro from "./metro.jsx";
import Square from "./square.jsx";
import Cycle from "./cycle.jsx";
import Simple from "./simple.jsx";

import "./activity.less";

export default class Activity extends React.Component {

    static defaultProps = {
        dataType: 'ring',
        dataStyle: 'light',
        dataSize: 64,
        dataRadius: 20,
        dataCls: ""
    };

    render() {
        let activityType;
        let activityClassName;

        switch (this.props.dataType) {
            case 'metro': activityType = <Metro/>; break;
            case 'square': activityType = <Square/>; break;
            case 'cycle': activityType = <Cycle/>; break;
            case 'simple': activityType = <Simple size={this.props.dataSize} radius={this.props.dataRadius}/>; break;
            default: activityType = <Ring/>;
        }

        activityClassName = `activity-${this.props.dataType} ${this.props.dataStyle}-style ${this.props.dataCls}`;

        return (
            <div className={activityClassName}>
                {activityType}
            </div>
        )
    }
}
