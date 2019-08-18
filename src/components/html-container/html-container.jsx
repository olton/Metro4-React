import React from "react";
import "regenerator-runtime/runtime";

export default class HtmlContainer extends React.Component {
    static defaultProps = {
        as: "div",
        source: null,
        insertAs: 'text'
    };

    constructor(props){
        super(props);
        this.element = React.createRef();
        this.state = {
            source: props.source,
            fetched: null,
            content: ""
        };
    }

    static getDerivedStateFromProps(props, state){
        if (props.source !== state.source) {
            return {
                fetched: null,
                content: "",
                source: props.source
            }
        }
        return null;
    }

    componentDidMount() {
        const {source} = this.props;

        if (!source) return;

        fetch(source).then(
            (response) => response.text()
        ).then(
            (response) => {
                this.setState({
                    fetched: true,
                    content: response
                })
            }
        ).catch((e) => {
            this.setState({
                fetched: true,
                content: e.message
            })
        });
    }

    componentWillUnmount(){
        this.element.current.innerHTML = "";
    }

    render(){
        const {as: Element, insertAs} = this.props;
        const {fetched, content} = this.state;

        return (
            <React.Fragment>
                {!fetched && fetched !== false && (
                    <div>Loading...</div>
                )}
                {fetched === false && (
                    <div>{content}</div>
                )}
                {fetched && insertAs === 'text' && (
                    <Element>{content}</Element>
                )}
                {fetched && insertAs === 'html' && (
                    <Element dangerouslySetInnerHTML={{__html: content}}/>
                )}
            </React.Fragment>
        )
    }
}