import React from "react";
import "./switch.less";

export default class Switch extends React.Component {
    static defaultProps = {
        checked: false,

        caption: "",
        variant: 1,

        cls: "",
        className: "",
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
            checked,
            caption,
            variant,
            cls, className,
            clsCheckbox,
            clsCaption,
            clsCheck,
            onCheck,
            onUnCheck,
            onChange,
            ...input
        } = this.props;

        return (
            <label className={`switch${(variant === 2 ? '-material' : '')} ${clsCheckbox} transition-on ${cls} ${className}`}>
                <input type="checkbox" {...input} checked={this.state.checked} onChange={this.onChangeHandler}/>
                <span className={"check " + clsCheck}/>
                <span className={"caption " + clsCaption}>{caption}</span>
            </label>
        )
    }
}