import React from "react";
import "./switch.less";

export default class Switch extends React.Component {
    static defaultProps = {
        name: "",
        dataCaption: "",
        dataMaterial: false,
        checked: false,
        disabled: false,
        value: "",

        dataClsCheckbox: "",
        dataClsCheck: "",
        dataClsCaption: "",

        onChange: ()=>{},
        onCheck: ()=>{},
        onUnCheck: ()=>{}
    };

    constructor(props){
        super(props);
        this.state = {
            checked: false
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(e){
        const state = e.target.checked;
        this.setState({
            checked: state
        });
        this.props.onChange(e.target, state);
        this.props[state ? 'onCheck' : 'onUnCheck'](e.target, state);
    }

    render(){
        const {
            name,
            value,
            dataCaption,
            dataMaterial,
            disabled,
            dataClsCheckbox
        } = this.props;

        return (
            <label className={'switch' + (dataMaterial ? '-material' : '') + ' ' +  dataClsCheckbox + ' transition-on'}>
                <input type="checkbox" name={name} defaultChecked={this.props.checked} onChange={this.onChangeHandler} disabled={disabled} value={value} readOnly={false}/>
                <span className="check"/>
                <span className="caption">{dataCaption}</span>
            </label>
        )
    }
}