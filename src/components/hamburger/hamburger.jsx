import React from "react";
import "./hamburger.less";

export default class Hamburger extends React.Component {
    static defaultProps = {
        cls: "",
        className: "",
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
        const {cls, className, variant, onClick, ...rest} = this.props;

        return (
            <button className={`hamburger ${variant} ${cls} ${className}`} onClick={this.onClick} {...rest}>
                <span className={'line'}/>
                <span className={'line'}/>
                <span className={'line'}/>
            </button>
        )
    }
}