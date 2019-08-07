import React from "react";
import "./hamburger.less";

export default class Hamburger extends React.Component {
    static defaultProps = {
        cls: "",
        variant: 'menu-down',
        onClick: () => {}
    };

    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(e){
        this.props.onClick(e);
    }

    render(){
        return (
            <button className={'hamburger ' + this.props.variant + ' ' + this.props.cls} onClick={this.onClick}>
                <span className={'line'}/>
                <span className={'line'}/>
                <span className={'line'}/>
            </button>
        )
    }
}