import React from "react";
import "./checkbox.less";
import "./switch.less";

export default class Checkbox extends React.Component {
    static defaultProps = {
        checked: false,
        mode: "checkbox",

        caption: "",
        variant: 1,
        transition: true,

        cls: "",
        className: "",
        clsCheck: "",
        clsCaption: "",

        onChange: ()=>{},
        onCheck: ()=>{},
        onUnCheck: ()=>{}
    };

    onChangeHandler = (e) => {
        const state = e.target.checked;
        this.props.onChange(e);
        this.props[state ? 'onCheck' : 'onUnCheck'](e);
    };

    render(){
        const {
            transition,
            mode,
            checked,
            caption,
            variant,
            cls, className,
            clsCaption,
            clsCheck,
            onChange,
            onCheck,
            onUnCheck,
            ...input
        } = this.props;

        const checkboxMode = mode === "switch" ? `switch${(variant === 2 ? '-material' : '')}` : `checkbox ${(variant === 2 ? 'style2' : '')}`;

        return (
            <label className={`${checkboxMode} ${transition ? "transition-on" : ""} ${cls} ${className}`}>
                <input type="checkbox" { ...input } defaultChecked={checked} onChange={this.onChangeHandler}/>
                <span className={ 'check ' + clsCheck } />
                <span className={ 'caption ' + clsCaption }>{caption}</span>
            </label>
        )
    }
}

const Switch = ({mode = "switch", ...rest}) => {
    return (
        <Checkbox mode={mode} {...rest}/>
    )
};

export {Checkbox, Switch};