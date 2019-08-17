import React, {Fragment} from "react";
import "./progress.less";

export default class Progress extends React.Component {
    static defaultProps = {
        variant: "default", //line, load
        showValue: false,
        value: 0,
        buffer: 0,
        cls: "",
        clsBack: "",
        clsBar: "",
        clsBuffer: "",
        clsLoad: "",
        clsValue: "",
    };

    static getDerivedStateFromProps(props, state){
        if (props.value !== state.initValue || props.buffer !== state.initBuffer) {
            return {
                value: props.value,
                initValue: props.value,
                buffer: props.buffer,
                initBuffer: props.buffer
            }
        }
        return null;
    }

    constructor(props){
        super(props);

        this.state = {
            initValue: props.value,
            value: props.value,
            buffer: props.buffer,
            initBuffer: props.buffer
        }
    }

    render(){
        const {showValue, variant, cls, clsBack, clsBar, clsBuffer, clsLoad, clsValue} = this.props;
        const {value, buffer} = this.state;
        const valuePosition = value > 90 ? {left: "auto", right: (100 - value) + 'px'} : {left: value + '%'};

        console.log(value, valuePosition);

        return (
            <div className={`progress ${cls} ${variant === 'line' ? 'line' : ''}`}>
                {variant !== 'line' && (
                    <Fragment>
                        <div className={'back ' + clsBack}/>
                        <div className={'bar ' + clsBar} style={{width: value+'%'}}/>
                        <div className={'buffer ' + clsBuffer} style={{width: buffer+'%'}}/>
                    </Fragment>
                )}
                {variant === 'load' && (
                    <div className={'load ' + clsLoad}/>
                )}
                {showValue && (
                    <span className={'value ' + clsValue} style={valuePosition}>{value + '%'}</span>
                )}
            </div>
        )
    }
}