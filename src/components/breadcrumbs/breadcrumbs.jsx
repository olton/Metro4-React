import React from "react";
import "./breadcrumbs.less";

export class BreadcrumbsItem extends React.Component {
    static defaultProps = {
        cls: "",
        clsPageItem: "",
        clsPageLink: "",
        href: ""
    };

    render() {
        const {
            href, clsPageItem, clsPageLink, cls
        } = this.props;

        const classItem = `page-item ${clsPageItem} ${cls}`;
        const classLink = `page-link ${clsPageLink}`;

        return (
            <li className={classItem}>
                <a href={href} className={classLink}>
                    {this.props.children}
                </a>
            </li>
        )
    }
}

export default class Breadcrumbs extends React.Component {
    static defaultProps = {
        cls: "",
        clsPageItem: "",
        clsPageLink: ""
    };

    render() {
        const {
            cls, clsPageItem, clsPageLink
        } = this.props;

        const Breadcrumbs = "ul";
        const className = `breadcrumbs ${cls}`;

        return (
            <Breadcrumbs className={className}>
                {
                    React.Children.map(this.props.children, function(item, index){
                        const props = item.props;
                        const classItem = `page-item ${clsPageItem} ${props.clsPageItem}`;
                        const classLink = `page-link ${clsPageLink} ${props.clsPageLink}`;
                        const itemProps = {
                            ...props,
                            clsPageItem: classItem,
                            clsPageLink: classLink
                        };
                        return (
                            <BreadcrumbsItem {...itemProps}>
                                {props.children}
                            </BreadcrumbsItem>
                        )
                    })
                }
            </Breadcrumbs>
        )
    }
}