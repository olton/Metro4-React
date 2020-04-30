import React from "react";
import "./activity.css";
import Body from "../body/body";
import Activity from "./activity";

export default class ActivityModal extends React.Component {
    constructor(props){
        super(props);
        this.overlayClick = this.overlayClick.bind(this);
    }

    overlayClick(e){
        this.props.onClose(e);
    }

    render() {
        const {open, onClose, overlayColor, overlayAlpha, ...props} = this.props;

        return (
            <Body>
                {open && (
                    <div className={'overlay'} style={{backgroundColor: overlayColor, opacity: overlayAlpha}} onClick={this.overlayClick}>
                        <Activity {...props} cls={'activity-modal'} />
                    </div>
                )}
            </Body>
        )
    }
}

ActivityModal.defaultProps = {
    open: false,
    overlayColor: "#ffffff",
    overlayAlpha: 1,
    onClose: () => {}
};