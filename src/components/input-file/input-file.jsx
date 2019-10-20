import React from "react";
import "./input-file.less";
import Button from "../button/button";
import {Icon} from "../../../index";

export default class InputFile extends React.Component {
    static defaultProps = {
        mode: "input",

        buttonIcon: "",
        buttonIconPrefix: "mif-",
        buttonIconSize: "1x",
        buttonTitle: "Choose file(s)",

        dropIcon: "",
        dropIconPrefix: "mif-",
        dropIconSize: "1x",
        dropTitle: <span><strong>Choose a file(s)</strong> or drop it here</span>,
        dropTitleSecondary: "file(s) selected",

        append: "",
        prepend: "",
        clear: true,
        select: true,
        customButtons: [],
        cls: "",
        className: "",
        clsCaption: "",
        clsAppend: "",
        clsPrepend: "",
        clsButtonGroup: "",
        clsCustomButton: "",
        clsClearButton: "",
        clsSelectButton: "",
        onClear: () => {},
        onChange: () => {},
        onBlur: () => {},
        onFocus: () => {}
    };

    constructor(props){
        super(props);

        this.state = {
            caption: "",
            value: "",
            focus: false
        };

        this.input = null;

        this.onChange = this.onChange.bind(this);
        this.clearValue = this.clearValue.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.focus = this.focus.bind(this);
        this.inputClick = this.inputClick.bind(this);
    }

    componentDidMount(){
        this.input.addEventListener("blur", this.onBlur);
        this.input.addEventListener("focus", this.onFocus);
        this.input.addEventListener("change", this.onChange);
    }

    componentWillUnmount() {
        this.input.removeEventListener("blur", this.onBlur);
        this.input.removeEventListener("focus", this.onFocus);
        this.input.removeEventListener("change", this.onChange);
    }

    onBlur(e){
        this.setState({
            focus: false
        });
        this.props.onBlur(e);
    }

    onFocus(e){
        this.setState({
            focus: true
        });
        this.props.onFocus(e);
    }

    onChange(e){
        const {onChange} = this.props;
        const fileNames = [...e.target.files].map( f => f.name);

        this.setState({
            caption: fileNames.join(", "),
            value: e.target.files
        });

        onChange(e);
    }

    clearValue(e){
        const {onClear} = this.props;

        this.input.value = "";
        this.setState({
            value: "",
            caption: ""
        });

        this.focus();

        onClear(e);
    }

    inputClick(){
        this.input.click();
    }

    focus(){
        this.input.focus();
    }

    render(){
        const {
            append, prepend, clear, select, customButtons, onClear, onSelect,
            cls, className, clsAppend, clsPrepend, clsClearButton, clsCustomButton, clsSelectButton, clsButtonGroup, clsCaption,
            mode, buttonTitle, dropTitle, dropTitleSecondary, buttonIcon, buttonIconPrefix, buttonIconSize,
            dropIcon, dropIconPrefix, dropIconSize,
            ...props} = this.props;
        const {value, focus, caption} = this.state;
        const buttons = true;

        return (
            <label className={(mode !== 'input' ? ' drop-zone ' : ' file ') + (focus ? ' focused ' : '') + cls + ' ' + className} title={caption}>

                <input {...props} type={'file'} onChange={this.onChange} ref={ref => this.input = ref} />

                {mode === 'input' && prepend !== "" && (
                    <span className={'prepend ' + clsPrepend}>{prepend}</span>
                )}

                {mode === 'input' && (
                    <span className={'caption ' + clsCaption}>{caption}</span>
                )}

                {mode === 'input' && buttons && (
                    <div className={'button-group ' + clsButtonGroup}>
                        {clear && !props.readOnly && (
                            <Button cls={'input-clear-button ' + clsClearButton} type='button' onClick={this.clearValue} tabIndex={-1}>
                                <span className='default-icon-cross'/>
                            </Button>
                        )}
                        {select && !props.readOnly && (
                            <Button cls={'button input-select-button ' + clsSelectButton} type='button' tabIndex={-1} onClick={this.inputClick}>
                                {buttonIcon !== "" && (
                                    <Icon name={buttonIcon} iconPrefix={buttonIconPrefix} size={buttonIconSize}/>
                                )}

                                {buttonTitle !== "" && (
                                    <span>{buttonTitle}</span>
                                )}
                            </Button>
                        )}

                        {customButtons.map(function(btn, index){
                            const {cls, ...btnProps} = btn;
                            return (
                                <Button cls={cls+' '+clsCustomButton} key={index} {...btnProps}/>
                            )
                        })}
                    </div>
                )}

                {mode === 'input' && append !== "" && (
                    <span className={'append ' + clsAppend}>{append}</span>
                )}

                {mode !== 'input' && dropIcon !== "" && (
                    <Icon name={'dropIcon'} iconPrefix={dropIconPrefix} size={dropIconSize}/>
                )}

                {mode !== 'input' && (
                    <React.Fragment>
                        <span className={'caption ' + clsCaption}>{dropTitle}</span>
                        <span className={'files ' + clsCaption}>{value.length + ' ' + dropTitleSecondary}</span>
                    </React.Fragment>
                )}

            </label>
        )
    }
}