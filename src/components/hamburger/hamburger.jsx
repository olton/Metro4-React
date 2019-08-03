import React from "react";
import "./hamburger.less";

export default class Hamburger extends React.Component {
    static defaultProps = {
        variant: 'menu-down'
    };

    render(){
        return (
            <button className={'hamburger ' + this.props.variant}>
                <span className={'line'}/>
                <span className={'line'}/>
                <span className={'line'}/>
            </button>
        )
    }
}