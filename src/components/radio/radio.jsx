import React from "react";
import "./radio.less";

export default class Radio extends React.Component {
    static defaultProps = {
        transition: true,
        checked: false,

        caption: "",
        variant: 1,

        clsRadio: "",
        clsCheck: "",
        clsCaption: "",

        onChange: ()=>{},
        onCheck: ()=>{},
        onUnCheck: ()=>{}
    };

    constructor(props){
        super(props);
        this.state = {
            checked: props.checked,
            initState: props.checked
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    static getDerivedStateFromProps(props, state){
        if (props.checked !== state.initState) {
            return {
                checked: props.checked,
                initState: props.checked
            }
        }
        return null;
    }

    onChangeHandler (e) {
        const state = e.target.checked;
        this.setState({
            checked: state
        });
        this.props.onChange(e);
        this.props[state ? 'onCheck' : 'onUnCheck'](e);
    };

    render(){
        const {
            transition,
            checked: propsChecked,
            caption,
            variant,
            clsRadio,
            clsCaption,
            clsCheck,
            onCheck,
            onUnCheck,
            onChange,
            ...input
        } = this.props;
        const {checked} = this.state;

        return (
            <label className={`radio ${clsRadio} ${variant === 2 ? 'style2' : ''} ${transition ? 'transition-on' : ''}`}>
                <input type="radio" {...input} checked={checked} onChange={this.onChangeHandler}/>
                <span className={"check " + clsCheck}/>
                <span className={"caption " + clsCaption}>{caption}</span>
            </label>
        )
    }
}