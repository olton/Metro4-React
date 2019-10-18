import React from "react";
import "./radio.less";

export default class Radio extends React.Component {
    static defaultProps = {
        checked: false,

        caption: "",
        variant: 1,

        clsCheckbox: "",
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
            checked,
            caption,
            variant,
            clsCheckbox,
            clsCaption,
            clsCheck,
            onCheck,
            onUnCheck,
            onChange,
            ...input
        } = this.props;

        return (
            <label className={'radio' + clsCheckbox + ' ' + (variant === 2 ? 'style2' : '') + ' transition-on'}>
                <input type="radio" {...input} defaultChecked={checked} onChange={this.onChangeHandler}/>
                <span className={"check " + clsCheck}/>
                <span className={"caption " + clsCaption}>{caption}</span>
            </label>
        )
    }
}