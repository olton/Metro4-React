import React from "react";
import "./split-button.less";
import Dropdown from "../dropdown/dropdown";

export default class SplitButton extends React.Component {
    static defaultProps = {
        cls: "",
        clsMainButton: "",
        clsSplitButton: "",
        clsDropdown: ""
    };

    constructor(props){
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(e){
        this.props.onClick(e);
    }

    render(){
        const {cls, clsMainButton, clsSplitButton, clsDropdown} = this.props;
        const children = React.Children.toArray(this.props.children);
        return (
            <div className={'split-button ' + cls}>
                {React.cloneElement(children[0], {
                    className: `${children[0].props.cls ? children[0].props.cls : ''} ${children[0].props.className ? children[0].props.className : ''} ${clsMainButton}`
                })}

                {children[2] && (
                    <Dropdown>
                        {React.cloneElement(children[1], {
                            className: `split dropdown-toggle ${children[1].props.cls ? children[1].props.cls : ''} ${children[1].props.className ? children[1].props.className : ''} ${clsSplitButton}`
                        })}
                        {React.cloneElement(children[2], {
                            className: `d-menu ${children[2].props.cls ? children[2].props.cls : ''} ${clsDropdown}`
                        })}
                    </Dropdown>
                )}

                {!children[2] && (
                    <React.Fragment>
                        {React.cloneElement(children[1], {
                            className: `split ${children[1].props.cls ? children[1].props.cls : ''} ${children[1].props.className ? children[1].props.className : ''} ${clsSplitButton}`
                        })}
                    </React.Fragment>
                )}
            </div>
        )
    }
}