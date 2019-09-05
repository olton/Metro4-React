import React from "react";
import "./hamburger.less";

export default class Hamburger extends React.Component {
    static defaultProps = {
        cls: "",
        className: "",
        variant: 'menu-down',
        active: false,
        theme: "light",
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
        const {theme, cls, className, variant, active, onClick, ...rest} = this.props;

        return (
            <button className={`hamburger ${theme} ${variant} ${cls} ${className} ${active ? 'active' : ''}`} onClick={this.onClick} {...rest}>
                <span className={'line'}/>
                <span className={'line'}/>
                <span className={'line'}/>
            </button>
        )
    }
}