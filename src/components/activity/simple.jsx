import React from "react";

export default class ActivitySimple extends React.Component {
    render(){
        return (
            <svg className="circular">
                <circle className="path" cx={this.props.size / 2} cy={this.props.size / 2} r={this.props.radius} fill="none" strokeWidth="2" strokeMiterlimit="10"/>
            </svg>
        )
    }
}