import React from "react";
import Select from "../select/select";
import "./select-color.less";

export default class SelectColor extends React.Component {
    static defaultProps = {
        source: null
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

    createItems = () => {
        const options = [];
        let index = -1;

        if (this.source) {
            for (let item in this.source) {
                options.push(
                    <option value={this.source[item]} key={index++}>
                        {item}
                    </option>
                )
            }
        }

        return options;
    };

    drawItem = item => {
        return !this.source ? item : `
            <div class='color-box-item'>
                <span class='box' style='background: ${this.source[item]}'></span>
                <span class='caption'>${item}</span>
            </div>
        `;
    };

    render(){
        const {source, children, ...rest} = this.props;
        const options = this.createItems();

        return (
            <Select onDrawItem={this.drawItem} {...rest}>
                {options}
            </Select>
        )
    }
}