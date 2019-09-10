import React from "react";
import Select from "../select/select";
import "./select-color.less";

export default class SelectColor extends React.Component {
    static defaultProps = {
        source: null,
        nameInCaption: true,
        nameInItem: true,
        cls: "",
        className: ""
    };

    constructor(props){
        super(props);
        let source = {};

        if (!props.source) {
            React.Children.toArray(props.children).forEach( (el) => {
                source = Object.assign(source, {[el.props.children]: el.props.value});
            } )
        }
        this.source = props.source ? props.source : source;
    }

    drawItem = item => {
        return !this.source ? item : `
            <div class='select-color-item'>
                <span class='box' style='background: ${this.source[item]}'></span>
                <span class='caption ${this.props.nameInItem ? '' : 'd-none'}'>${item}</span>
            </div>
        `;
    };

    drawCaption = caption => {
        return !this.source ? caption : `
            <div class='select-color-item'>
                <span class='box' style='background: ${this.source[caption]}'></span>
                <span class='caption ${this.props.nameInCaption ? '' : 'd-none'}'>${caption}</span>
            </div>
        `;
    };

    render(){
        const {colorNameInCaption, colorNameInItem, children, cls, className, ...rest} = this.props;

        return (
            <Select className={`select-color ${cls} ${className}`} onDrawItem={this.drawItem} onDrawCaption={this.drawCaption} useHTML={true} {...rest}>
                {children}
            </Select>
        )
    }
}