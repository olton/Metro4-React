import React from "react";

export default class Example extends React.Component {
    render(){
        return(
            <div className={'example ' + this.props.className ? this.props.className : this.props.cls ? this.props.cls : ''}>
                {this.props.children}
            </div>
        )
    }
}