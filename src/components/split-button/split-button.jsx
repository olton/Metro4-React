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
                    cls: `${children[0].props.cls} ${clsMainButton}`
                })}

                {children[2] && (
                    <Dropdown>
                        {React.cloneElement(children[1], {
                            cls: `${children[1].props.cls} split dropdown-toggle ${clsSplitButton}`
                        })}
                        {React.cloneElement(children[2], {
                            cls: `${children[2].props.cls} ${clsDropdown}`
                        })}
                    </Dropdown>
                )}

                {!children[2] && (
                    <React.Fragment>
                        {React.cloneElement(children[1], {
                            cls: `${children[1].props.cls} split ${clsSplitButton}`
                        })}
                    </React.Fragment>
                )}
            </div>
        )
    }
}