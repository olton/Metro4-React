import React from "react";
import "./rating.less";
import Utils from "../../routines/utils";

export default class Rating extends React.Component {
    static defaultProps = {
    };

    constructor(props){
        super(props);

        this.input = React.createRef();

        this.state = {
            value: props.value,
            initValue: props.value
        };

        this.id = props.id ? props.id : Utils.elementId("rating");
        this.values = props.values.length ? props.values.sort( (a, b) => a - b ) : [...Array(props.stars)].map( (el, i) => i + 1 );

        if (props.starColor || props.staredColor) {
            const sheet = Utils.newCssSheet();
            if (props.starColor && !props.isStatic) {
                Utils.addCssRule(sheet, "#" + this.id + " .stars:hover li", "color: " + props.starColor + ";");
            }
            if (props.staredColor) {
                Utils.addCssRule(sheet, "#"+this.id+" .stars li.on", "color: "+props.staredColor+";");
                Utils.addCssRule(sheet, "#"+this.id+" .stars li.half::after", "color: "+props.staredColor+";");
            }
        }
    }

    static getDerivedStateFromProps(props, state){
        if (props.value !== state.initValue) {
            return {
                value: props.value,
                initValue: props.value
            }
        }
        return null;
    }

    onChange = e => {
        this.props.onChange(e);
        console.log(e);
    };

    onClick = val => {
        this.setState({
            value: this.values.indexOf(val) + 1
        });
        this.props.onClick(val);
    };

    render(){
        const {round, half, isStatic, caption, stars, cls, clsStars, clsStar, clsStarOn, clsCaption} = this.props;
        const {value} = this.state;
        const items = [], values = this.values;
        const val = isStatic ? Math.floor(value) : Math[round](value);

        for(let i = 1; i <= stars; i++) {
            items.push(<li key={i} className={clsStar + ' ' + (i <= val ? ' on ' + clsStarOn + ' ' : '')} onClick={this.onClick.bind(this, values[i - 1])}/>);
        }

        if (isStatic && half) {
            const dec = Math.round((value % 1) * 10);
            if (dec > 0 && dec <=9) {
                items[val] = React.cloneElement(items[val], {
                    className: items[val].className + " half half-" + ( dec * 10)
                });
            }
        }

        return(
            <label className={'rating ' + cls + (isStatic ? ' static ' : '')} id={this.id}>
                <input type={'text'} value={value} onChange={this.onChange} ref={this.input}/>

                <ul className={'stars ' + clsStars}>
                    {items}
                </ul>

                {caption !== "" && (
                    <span className={'result ' + clsCaption}>{caption}</span>
                )}
            </label>
        )
    }

}

Rating.defaultProps = {
    value: 0,
    values: [],
    round: "round", // round, ceil, floor
    stars: 5,
    isStatic: false,
    half: true,
    caption: "",
    starColor: null,
    staredColor: null,
    cls: "",
    clsStars: "",
    clsStar: "",
    clsStarOn: "",
    clsCaption: "",
    onChange: () => {},
    onClick: () => {}
};