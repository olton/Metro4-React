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

        onSwitchChange: ()=>{}
    };

    constructor(props){
        super(props);
        this.state = {
            checked: this.props.checked
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(e){
        const state = e.target.checked;
        this.setState({
            checked: state
        });
        this.props.onSwitchChange(e.target, state)
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

        const checked = this.state.checked;

        return (
            <label className={'switch' + (dataMaterial ? '-material' : '') + ' ' +  dataClsCheckbox + ' transition-on'}>
                <input type="checkbox" name={name} checked={checked} onChange={this.onChangeHandler} disabled={disabled} value={value} readOnly={false}/>
                <span className="check"/>
                <span className="caption">{dataCaption}</span>
            </label>
        )
    }
}