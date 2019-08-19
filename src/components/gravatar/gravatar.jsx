import React from "react";
import PropTypes from 'prop-types';
import {md5} from "../../routines";

export default class Gravatar extends React.Component {
    static propsTypes = {
        email: PropTypes.string.isRequired
    };

    static defaultProps = {
        size: 80,
        defaultImage: "mp",
        cls: ""
    };

    render(){
        const {size, defaultImage, email, cls, ...props} = this.props;
        const src = `//www.gravatar.com/avatar/${md5((email.toLowerCase()).trim())}?size=${size}&d=${defaultImage}`;

        return (
            <img src={src} className={'gravatar ' + cls} {...props}/>
        )
    }
}