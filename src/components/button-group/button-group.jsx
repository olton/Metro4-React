import React from "react";
import "./buttonh-group.less";

export default class ButtonGroup extends React.Component {
    static defaultProps = {
        radio: false,
        cls: "",
        clsActive: "",
        clsButton: "",
        onButtonClick: ()=>{}
    };

    constructor(props){
        super(props);

        const pressedButtons = {};

        React.Children.forEach(this.props.children, (button, index) => {
            if (button.props.active) {
                pressedButtons[index] = true;
            }
        });

        this.state = {
            radio: this.props.radio,
            buttons: pressedButtons
        };

        this.buttonClick = this.buttonClick.bind(this);
    }

    buttonClick(index){
        const {buttons, radio} = this.state;
        const active = !!buttons[index];
        const button = React.Children.toArray(this.props.children)[index];

        if (!radio) {
            this.setState({
                buttons: {
                    ...buttons,
                    [index]: !active
                }
            });
        } else {
            this.setState({
                buttons: {
                    [index]: !active
                }
            });
        }
        this.props.onButtonClick(button);
    }

    render(){
        const {cls, clsActive, clsButton} = this.props;
        const {buttons} = this.state;

        return (
            <div className={'button-group ' + cls}>
                {
                    React.Children.map(this.props.children, (button, index) => {
                        const isActive = !!buttons[index];
                        return (
                            React.cloneElement(button, {
                                cls: button.props.cls + ' ' + clsButton + ' ' + (isActive ? clsActive === '' ? ' active ' : clsActive : ''),
                                index: index,
                                onClick: this.buttonClick.bind(this, index)
                            })
                        )
                    })
                }
            </div>
        )
    }
}