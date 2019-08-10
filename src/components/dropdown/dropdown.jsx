import React from "react";
import Collapse from "../collapse/collapse";
import "./dropdown.less";
import Collapsible from "../collapsible/collapsible";

export default class Dropdown extends React.Component {
    static defaultProps = {
        as: "div",
        speed: 100,
        position: "absolute",
        cls: "",
        clsDropdown: ""
    };

    constructor(props){
        super(props);

        this.state = {
            open: false
        };

        this.dropdown = React.createRef();

        this.toggleState = this.toggleState.bind(this);
    }

    componentDidMount(){
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount(){
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    handleClickOutside = event => {
        if (this.dropdown.current && !this.dropdown.current.contains(event.target)) {
            this.setState({
                open: false,
            });
        }
    };

    toggleState(e){
        const openState = this.state.open;
        this.setState({
            open: !openState
        });
    }

    render(){
        const {as: Element, speed, cls, clsDropdown, position} = this.props;
        const {open} = this.state;
        const children = React.Children.toArray(this.props.children);

        return (
            <Element className={'dropdown ' + cls + " " + (open ? "dropped" : "")} ref={this.dropdown}>
                {React.cloneElement(children[0], {
                    onClick: this.toggleState
                })}

                <Collapsible open={open} cls={'drop-object ' + clsDropdown} speed={speed}>
                    {children[1]}
                </Collapsible>
            </Element>
        )
    }
}