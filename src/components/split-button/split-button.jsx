import React from "react";
import "./split-button.css";
import Dropdown from "../dropdown/dropdown";

export default class SplitButton extends React.Component {
    constructor(props){
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(e){
        this.props.onClick(e);
    }

    render(){
        const {cls, className} = this.props;
        const children = React.Children.toArray(this.props.children);
        return (
            <div className={`split-button ${cls} ${className}`}>
                {React.cloneElement(children[0], {})}

                {children[2] && (
                    <Dropdown>
                        {React.cloneElement(children[1], {
                            className: `split dropdown-toggle ${children[1].props.cls ? children[1].props.cls : ''} ${children[1].props.className ? children[1].props.className : ''}`
                        })}
                        {React.cloneElement(children[2], {
                            className: `d-menu ${children[2].props.cls ? children[2].props.cls : ''} ${children[2].props.className ? children[2].props.className : ''}`
                        })}
                    </Dropdown>
                )}

                {!children[2] && (
                    <React.Fragment>
                        {React.cloneElement(children[1], {
                            className: `split ${children[1].props.cls ? children[1].props.cls : ''} ${children[1].props.className ? children[1].props.className : ''}`
                        })}
                    </React.Fragment>
                )}
            </div>
        )
    }
}

SplitButton.defaultProps = {
    cls: "",
    className: ""
};