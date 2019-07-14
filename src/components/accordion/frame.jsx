import React from "react";

export default class AccordionFrame extends React.Component {
    static defaultProps = {
        dataTitle: "",
        dataClsFrame: "",
        dataClsFrameHeading: "",
        dataClsFrameContent: "",
    };

    constructor(props){
        super(props);
        this.state = {
            open: false
        };
        this.onHeadingClick = this.onHeadingClick.bind(this);
    }

    onHeadingClick(){
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }

    render(){
        return (
            <div className="frame">
                <div className="heading" onClick={this.onHeadingClick}>{this.props.dataTitle}</div>
                <div className="content" hidden={this.state.open}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}