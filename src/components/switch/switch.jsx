import React from "react";
import "./switch.less";

export default class Switch extends React.Component {
    static defaultProps = {
        name: "",
        caption: "",
        variant: 1,
        checked: false,
        disabled: false,
        value: "",

        clsCheckbox: "",
        clsCheck: "",
        clsCaption: "",

        onChange: ()=>{},
        onCheck: ()=>{},
        onUnCheck: ()=>{}
    };

    static getDerivedStateFromProps(props, state){
        if (props.checked !== state.initChecked) {
            return {
                checked: props.checked,
                initChecked: props.checked
            }
        }
        return null;
    }

    constructor(props){
        super(props);
        this.state = {
            checked: props.checked,
            initChecked: props.checked
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(e){
        const state = e.target.checked;
        this.setState({
            checked: state
        });
        this.props.onChange(e);
        this.props[state ? 'onCheck' : 'onUnCheck'](e);
    }

    render(){
        const {
            name,
            value,
            caption,
            variant,
            disabled,
            clsCheckbox,
            clsCaption,
            clsCheck
        } = this.props;

        const inputProps = {
            name,
            value,
            disabled,
            readOnly: false,
            checked: this.state.checked,
            onChange: this.onChangeHandler
        };

        return (
            <label className={'switch' + (variant === 2 ? '-material' : '') + ' ' +  clsCheckbox + ' transition-on'}>
                <input type="checkbox" {...inputProps}/>
                <span className={"check " + clsCheck}/>
                <span className={"caption " + clsCaption}>{caption}</span>
            </label>
        )
    }
}