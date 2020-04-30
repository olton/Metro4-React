import React from "react";
import "./breadcrumbs.css";

export class BreadcrumbsItem extends React.Component {
    render() {
        const {
            clsItem, clsLink, cls, className, ...rest
        } = this.props;

        const classItem = `page-item ${cls} ${className} ${clsItem}`;
        const classLink = `page-link ${clsLink}`;

        return (
            <li className={classItem}>
                <a className={classLink} {...rest}>
                    {this.props.children}
                </a>
            </li>
        )
    }
}

BreadcrumbsItem.defaultProps = {
    cls: "",
    className: "",
    clsItem: "",
    clsLink: ""
};

export default class Breadcrumbs extends React.Component {
    render() {
        const {
            cls, className, clsItem, clsLink
        } = this.props;

        const Breadcrumbs = "ul";

        return (
            <Breadcrumbs className={`breadcrumbs ${cls} ${className}`}>
                {
                    React.Children.map(this.props.children, (item, index) => {
                        const props = item.props;
                        const classItem = `page-item ${clsItem} ${props.clsItem}`;
                        const classLink = `page-link ${clsLink} ${props.clsLink}`;
                        const itemProps = {
                            ...props,
                            clsItem: classItem,
                            clsLink: classLink
                        };
                        return (
                            <BreadcrumbsItem {...itemProps} key={index}>
                                {props.children}
                            </BreadcrumbsItem>
                        )
                    })
                }
            </Breadcrumbs>
        )
    }
}

Breadcrumbs.defaultProps = {
    cls: "",
    className: "",
    clsItem: "",
    clsLink: ""
};