import React from "react";

export default class AccordionFrame extends React.Component {
    static defaultProps = {
        dataFrame: null,
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
        const props = this.props;

        return (
            <div className={'frame ' + props.dataClsFrame}>
                <div className={'heading ' + props.dataClsFrameHeading} onClick={this.onHeadingClick}>{props.dataTitle}</div>
                {open && (
                    <div className={'content ' + props.dataClsFrameContent}>
                        {props.children}
                    </div>
                )}
            </div>
        )
    }
}