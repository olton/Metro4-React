import React from "react";
import Tag from "../tag/tag";
import "./tag-input.less";

const inputChangeEvents = "change input propertychange cut paste copy drop".split(" ");

export default class TagInput extends React.Component {
    static defaultProps = {
        tags: [],
        maxTags: 0,
        tagTrigger: [13, 188],
        clsTag: "",
        clsTagTitle: "",
        clsTagRemover: "",
        onChange: () => {},
        onBlur: () => {},
        onFocus: () => {},
    };

    constructor(props){
        super(props);
        this.state = {
            tags: props.tags,
            initValue: props.tags.join(",")
        };
        this.component = React.createRef();
        this.input = React.createRef();
        this.tagClickHandler = this.tagClickHandler.bind(this);
    }

    onChange = tags => {
        this.props.onChange(tags);
    };

    inputKeyUp = e => {
        const input = e.target;
        const {tagTrigger} = this.props;
        let val = input.value.trim();
        const {tags} = this.state;

        if (val === "") {
            return;
        }
        if (tagTrigger.indexOf(e.keyCode) === -1) {
            return ;
        }

        // TODO replace "," to tagTrigger
        val = val.replace(",", "");

        tags.push(val);
        input.value = "";
        this.setState({
            tags: tags
        });

        this.onChange(tags);
    };

    inputChange = () => {
        const input = this.input.current;
        input.setAttribute("size", Math.ceil(input.value.length / 2) + 2);
    };

    onFocus = e => {
        this.setState({
            focus: true
        });
        this.props.onFocus(e);
    };

    onBlur = e => {
        this.setState({
            focus: false
        });
        this.props.onBlur(e);
    };

    onClick = () => {
        this.input.current.focus();
    };

    tagClickHandler(index) {
        return e => {

            if (!e.target.classList.contains("remover")) {
                return false;
            }
            const { tags } = this.state;
            tags.splice(index, 1);

            this.setState({tags});

            this.onChange(tags);

            e.preventDefault();
            e.stopPropagation();
        };
    }

    componentDidMount(){
        const input = this.input.current;
        const component = this.component.current;

        component.addEventListener("click", this.onClick);

        input.addEventListener("keyup", this.inputKeyUp);
        input.addEventListener("focus", this.onFocus);
        input.addEventListener("blur", this.onBlur);

        inputChangeEvents.forEach( ev => {
            input.addEventListener(ev, this.inputChange);
        });
    }

    componentWillUnmount() {
        const input = this.input.current;
        const component = this.component.current;

        component.removeEventListener("click", this.onClick);

        input.removeEventListener("keyup", this.inputKeyUp);
        input.removeEventListener("focus", this.onFocus);
        input.removeEventListener("blur", this.onBlur);

        inputChangeEvents.forEach( ev => {
            input.removeEventListener(ev, this.inputChange);
        });
    }

    static getDerivedStateFromProps(props, state){
        if (props.tags.join(",") !== state.initValue) {
            return {
                tags: props.tags
            }
        }
        return null;
    }

    render(){
        const {tags: propsTags, maxTags, tagTrigger, clsTag, clsTagTitle, clsTagRemover, ...inputProps} = this.props;
        const {tags, focus} = this.state;

        return (
            <div className={`tag-input ${focus ? 'focused' : ''}`} ref={this.component}>
                {tags.map( (tag, index) => {
                    return (
                        <Tag
                            cls={clsTag}
                            clsTitle={clsTagTitle}
                            clsRemover={clsTagRemover}
                            key={index}
                            onClick={this.tagClickHandler(index)}
                        >
                            {tag}
                        </Tag>
                    )
                })}
                <input type="text" className={`input-wrapper`} ref={this.input} size={1}/>
            </div>
        )
    }
}
