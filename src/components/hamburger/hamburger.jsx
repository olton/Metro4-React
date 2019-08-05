import React from "react";
import "./hamburger.less";

export default class Hamburger extends React.Component {
    static defaultProps = {
        cls: "",
        variant: 'menu-down'
    };

    render(){
        return (
            <button className={'hamburger ' + this.props.variant + ' ' + this.props.cls}>
                <span className={'line'}/>
                <span className={'line'}/>
                <span className={'line'}/>
            </button>
        )
    }
}