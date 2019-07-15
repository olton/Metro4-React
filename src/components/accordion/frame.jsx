import React from "react";

export default class AccordionFrame extends React.Component {
    static defaultProps = {
        open: false,
        dataTitle: "",
        dataClsFrame: "",
        dataClsFrameHeading: "",
        dataClsFrameContent: ""
    };

    constructor(props){
        super(props);
        this.onHeadingClick = this.onHeadingClick.bind(this);
    }

    onHeadingClick(){
        this.props.onHeadingClick(this.props.dataFrame);
    }

    render(){
        const {open} = this.props;

        return (
            <div className={'frame ' + this.props.dataClsFrame}>
                <div className={'heading ' + this.props.dataClsFrameHeading} onClick={this.onHeadingClick}>{this.props.dataTitle}</div>
                {open && (
                    <div className={'content ' + this.props.dataClsFrameContent}>
                        {this.props.children}
                    </div>
                )}
            </div>
        )
    }
}