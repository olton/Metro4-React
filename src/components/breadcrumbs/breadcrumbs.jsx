import React from "react";
import "./breadcrumbs.less";

export class BreadcrumbsItem extends React.Component {
    static defaultProps = {
        cls: "",
        className: "",
        clsItem: "",
        clsLink: ""
    };

    render() {
        const {
            href, clsItem, clsLink, cls, className, ...rest
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

export default class Breadcrumbs extends React.Component {
    static defaultProps = {
        cls: "",
        className: "",
        clsItem: "",
        clsLink: ""
    };

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
                            classItem,
                            classLink
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