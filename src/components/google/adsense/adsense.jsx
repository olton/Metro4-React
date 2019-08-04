import React from "react";
import PropTypes from 'prop-types';

export default class Adsense extends React.Component {
    static propsTypes = {
        client: PropTypes.string.isRequired,
        slot: PropTypes.string.isRequired,
        style: PropTypes.object
    };

    static defaultProps = {
        as: "ins",
        style: {display: 'block'},
        cls: "",
        client: "",
        slot: "",
        layout: "",
        layoutKey: "",
        format: "auto",
        responsive: false,
        test: 'off'
    };

    componentDidMount(){
        if (window) (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render(){
        const {as: Element, style, cls, client, slot, layout, layoutKey, format, responsive, test} = this.props;

        return (
            <Element className={`${cls} adsbygoogle`}
                 style={style}
                 data-ad-client={client}
                 data-ad-slot={slot}
                 data-ad-layout={layout}
                 data-ad-layout-key={layoutKey}
                 data-ad-format={format}
                 data-ad-test={test}
                 data-full-width-responsive={responsive}/>
        )
    }
}