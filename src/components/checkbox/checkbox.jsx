import React from "react";
import "./checkbox.less";

export default class Checkbox extends React.Component {
    static defaultProps = {
        name: "",
        caption: "",
        checked: false,
        disabled: false,
        value: "",

        dataClsCheckbox: "",
        dataClsCheck: "",
        dataClsCaption: "",
    };

    constructor(props){
        super(props);
        this.state = {
            checked: this.props.checked
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(e){
        this.setState({
            checked: e.target.checked
        });
    }

    render(){
        const {
            name,
            value,
            caption,
            disabled,
            dataClsCheckbox
        } = this.props;

        const checked = this.state.checked;

        return (
            <label className={'checkbox' + dataClsCheckbox}>
                <input type="checkbox" name={name} checked={checked} onChange={this.onChangeHandler} disabled={disabled} value={value} readOnly={false}/>
                <span className="check"/>
                <span className="caption">{caption}</span>
            </label>
        )
    }
}