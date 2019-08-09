import React from "react";
import Collapse from "../collapse/collapse";
import "./dropdown.less";

export default class Dropdown extends React.Component {
    static defaultProps = {
        speed: 100,
        position: "absolute",
        place: "left",
        cls: "",
        clsDropdown: ""
    };

    constructor(props){
        super(props);

        this.state = {
            open: false
        };

        this.toggleState = this.toggleState.bind(this);
    }

    toggleState(e){
        const openState = this.state.open;
        this.setState({
            open: !openState
        });
    }

    render(){
        const {speed, position, cls, place, clsDropdown} = this.props;
        const {open} = this.state;
        const children = React.Children.toArray(this.props.children);
        const transition = `height ${speed}ms cubic-bezier(.4, 0, .2, 1)`;

        return (
            <div className={'dropdown ' + cls + " " + (open ? "dropped" : "")}>
                {React.cloneElement(children[0], {
                    onClick: this.toggleState
                })}

                <Collapse isOpen={open} transition={transition} className={'drop-object pos-'+position + ' place-' + place + ' ' + clsDropdown}>
                    {children[1]}
                </Collapse>
            </div>
        )
    }
}