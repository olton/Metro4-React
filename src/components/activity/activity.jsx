import React from "react";
import Ring from "./ring.jsx";
import Metro from "./metro.jsx";
import Square from "./square.jsx";
import Cycle from "./cycle.jsx";
import Simple from "./simple.jsx";

import "./activity.css";

export default class Activity extends React.Component {
    render() {
        let activityType;
        let activityClassName;

        const {type, variant, size, radius, cls} = this.props;

        switch (type) {
            case 'metro': activityType = <Metro/>; break;
            case 'square': activityType = <Square/>; break;
            case 'cycle': activityType = <Cycle/>; break;
            case 'simple': activityType = <Simple size={size} radius={radius}/>; break;
            default: activityType = <Ring/>;
        }

        activityClassName = `activity-${type} ${variant}-style ${cls}`;

        return (
            <div className={activityClassName}>
                {activityType}
            </div>
        )
    }
}

Activity.defaultProps = {
    type: 'ring',
    variant: 'light',
    size: 64,
    radius: 20,
    cls: ""
};