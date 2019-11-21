import React from "react";
import Tag from "../tag/tag";
import "./tag-input.less";

export default class TagInput extends React.Component {
    static defaultProps = {
        tags: [],
        maxTags: 0,
        tagSeparator: ",",
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

    inputChange = e => {
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

    tagClick = e => {

        if (!e.target.classList.contains("remover")) {
            return false;
        }

        const index = e.target.parentNode.getAttribute('data-tag-index');
        const {tags} = this.state;
        const newValue = tags.splice(index, 1);

        this.setState({
            tags: newValue
        });

        this.onChange(newValue);

        e.preventDefault();
        e.stopPropagation();
    };

    componentDidMount(){
        const input = this.input.current;
        const component = this.component.current;

        component.addEventListener("click", this.onClick);
        input.addEventListener("inputchange", this.inputChange);
        input.addEventListener("keyup", this.inputKeyUp);
        input.addEventListener("focus", this.onFocus);
        input.addEventListener("blur", this.onBlur);
    }

    componentWillUnmount() {
        const input = this.input.current;
        const component = this.component.current;

        component.removeEventListener("click", this.onClick);
        input.removeEventListener("inputchange", this.inputChange);
        input.removeEventListener("keyup", this.inputKeyUp);
        input.removeEventListener("focus", this.onFocus);
        input.removeEventListener("blur", this.onBlur);
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
        const {tags: propsTags, maxTags, tagSeparator, tagTrigger, clsTag, clsTagTitle, clsTagRemover, ...inputProps} = this.props;
        const {tags, focus} = this.state;

        return (
            <div className={`tag-input ${focus ? 'focused' : ''}`} ref={this.component}>
                {tags.map( (tag, index) => {
                    return (
                        <Tag data-tag-index={index} cls={clsTag} clsTitle={clsTagTitle} clsRemover={clsTagRemover} key={index} onClick={this.tagClick}>{tag}</Tag>
                    )
                })}
                <input type="text" className={`input-wrapper`} ref={this.input} size={1}/>
            </div>
        )
    }
}