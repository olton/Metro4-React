import React from "react";
import "./split-button.less";
import Dropdown from "../dropdown/dropdown";

export default class SplitButton extends React.Component {
    static defaultProps = {
        dropdown: true,
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
        const {dropdown, cls, clsMainButton, clsSplitButton, clsDropdown} = this.props;
        const children = React.Children.toArray(this.props.children);
        return (
            <div className={'split-button ' + cls}>
                {React.cloneElement(children[0], {
                    cls: `${children[0].props.cls} ${clsMainButton}`
                })}

                {dropdown && (
                    <Dropdown>
                        {React.cloneElement(children[1], {
                            cls: `${children[1].props.cls} split dropdown-toggle ${clsSplitButton}`
                        })}
                        {children[2] && React.cloneElement(children[2], {
                            cls: `${children[2].props.cls} ${clsDropdown}`
                        })}
                    </Dropdown>
                )}

                {!dropdown && (
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