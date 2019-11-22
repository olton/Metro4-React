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

    constructor(props){
        super(props);
        this.state = {
            checked: props.checked
        }
    }

    static getDerivedStateFromProps(props, state){
        if (props.checked !== state.checked) {
            return {
                checked: props.checked
            }
        }
        return null;
    }

    onChangeHandler = (e) => {
        const state = e.target.checked;
        this.props.onChange(e);
        this.props[state ? 'onCheck' : 'onUnCheck'](e);
    };

    render(){
        const {
            checked: propsChecked,
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
        const {checked} = this.state;

        return (
            <label className={'radio' + clsCheckbox + ' ' + (variant === 2 ? 'style2' : '') + ' transition-on'} onClick={this.onClick}>
                <input type="radio" {...input} defaultChecked={checked} onChange={this.onChangeHandler}/>
                <span className={"check " + clsCheck}/>
                <span className={"caption " + clsCaption}>{caption}</span>
            </label>
        )
    }
}