import React from "react";
import Select from "../select/select";
import "./select-color.less";

export default class SelectColor extends React.Component {
    static defaultProps = {
        source: null
    };

    drawItem = item => {
        const {source} = this.props;
        return !source ? item : `
            <div class='color-box-item'>
                <span class='box' style='background: ${source[item]}'></span>
                <span class='caption'>${item}</span>
            </div>
        `;
    };

    render(){
        const {source, ...rest} = this.props;
        const options = [];
        let index = -1;

        for(let item in source) {
            options.push(
                <option value={source[item]} key={index++}>
                    {item}
                </option>
            )
        }

        return (
            <Select onDrawItem={this.drawItem} {...rest}>
                {options}
            </Select>
        )
    }
}