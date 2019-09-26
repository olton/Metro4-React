import React from "react";
import Select from "../select/select";
import "./select-color.less";

const SelectColorItem = (props) => {
    return (
        <div className='select-color-item'>
            <span className='box' style={{background: props.color}}/>
            <span className='caption' hidden={props.hidden}>{props.caption}</span>
        </div>
    )
};

export default class SelectColor extends React.Component {
    static defaultProps = {
        source: null,
        showColorName: true,
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
        return !this.source ? item : <SelectColorItem color={this.source[item]} hidden={!this.props.showColorName} caption={item}/>
    };

    render(){
        const {colorNameInCaption, colorNameInItem, children, cls, className, ...rest} = this.props;

        return (
            <Select className={`select-color ${cls} ${className}`} onDrawItem={this.drawItem} onDrawCaption={this.drawItem} {...rest}>
                {children}
            </Select>
        )
    }
}