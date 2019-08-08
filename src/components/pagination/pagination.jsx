import React from "react";
import "./pagination.less";

class PaginationItem extends React.Component {
    static defaultProps = {
        cls: "",
        title: "",
        data: null,
        onClick: () => {}
    };

    constructor(props){
        super(props);
    }

    render(){
        const {cls, title, data, onClick, index} = this.props;

        return (
            <li key={index} className={'page-item ' + cls} onClick={ () => onClick(data) } data-ndex={index}>
                <a className={'page-link'}>{title}</a>
            </li>
        )
    }
}

export default class Pagination extends React.Component {
    static defaultProps = {
        total: 0,
        itemsPerPage: 0,
        current: 0,
        distance: 5,
        cls: "",
        prevTitle: "Prev",
        nextTitle: "Next",
        moreTitle: "...",
        onClick: () => {}
    };

    constructor(props){
        super(props);
        this.itemClick = this.itemClick.bind(this);
    }

    itemClick(val){
        this.props.onClick(val)
    }

    render() {
        const {cls, total, itemsPerPage, current, distance, prevTitle, nextTitle, moreTitle, onClick, ...props} = this.props;
        const pagesCount = Math.ceil(total / itemsPerPage);
        const items = [];

        items.push(<PaginationItem title={prevTitle} cls={'service prev-page'} data={'prev'} disabled={current === 1}/>);

        items.push(<PaginationItem title={1} cls={current === 1 ? 'active' : ''} data={1} />);

        if (distance === 0 || pagesCount <=7) {
            for(let i = 2; i < pagesCount; i++) {
                items.push(<PaginationItem title={i} cls={i === current ? 'active' : ''} data={i}/>);
            }
        } else {
            if (current < distance) {
                for(let i = 2; i <= distance; i++) {
                    items.push(<PaginationItem title={i} cls={i === current ? 'active' : ''} data={i}/>);
                }
                if (pagesCount >  distance) {
                    items.push(<PaginationItem title={moreTitle} cls={'no-link'}/>);
                }
            } else if (current <= pagesCount && current > pagesCount - distance + 1) {
                if (pagesCount > distance) {
                    items.push(<PaginationItem title={moreTitle} cls={'no-link'}/>);
                }
                for(let i = pagesCount - distance + 1; i < pagesCount; i++) {
                    items.push(<PaginationItem title={i} cls={i === current ? 'active' : ''} data={i}/>);
                }
            } else {
                items.push(<PaginationItem title={moreTitle} cls={'no-link'}/>);
                items.push(<PaginationItem title={current - 1} data={current - 1}/>);
                items.push(<PaginationItem title={current} cls={'active'} data={current}/>);
                items.push(<PaginationItem title={current + 1} data={current + 1}/>);
                items.push(<PaginationItem title={moreTitle} cls={'no-link'}/>);
            }
        }

        if (pagesCount > 1 || current < pagesCount) {
            items.push(<PaginationItem title={pagesCount} cls={current === pagesCount ? 'active' : ''} data={pagesCount}/>);
        }

        items.push(<PaginationItem title={nextTitle} cls={'service next-page'} data={'next'} disabled={current === pagesCount}/>);

        return (
            <ul className={'pagination ' + cls + (total === 0 ? ' disabled ' : '')} {...props}>
                {items.map( (el, index) => {
                    return React.cloneElement(el, {
                        key: index,
                        onClick: this.itemClick
                    })
                })}
            </ul>
        )
    }
}
