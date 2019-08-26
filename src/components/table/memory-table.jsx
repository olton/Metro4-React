import React from "react";
import Table from "./table";
import Pagination from "../pagination/pagination";
import {FetchStatus} from "../../../public/components/Defs";
import Input from "../input/input";
import Select from "../select/select";

export default class MemoryTable extends React.Component {
    static defaultProps = {
        source: null,
        pagination: true,
        search: true,
        rows: [-1, 10, 20, 100],
        showRows: 10,
        clsSearchBlock: "row",
        clsSearch: "cell-md-9",
        clsRows: "cell-md-3",
        searchPlaceholder: "Search...",
        rowsPrepend: null
    };

    constructor(props){
        super(props);

        this.head = null;
        this.data = null;

        this.state = {
            status: FetchStatus.init,
            rowsPerPage: props.showRows,
            total: 0,
            page: 1
        };
    }

    sliceData = () => {
        const {page, rowsPerPage: rows, total} = this.state;
        const data = [];
        const start = parseInt(rows) === -1 ? 0 : rows * (page - 1),
              stop = parseInt(rows) === -1 ? total - 1 : start + rows - 1;

        if (this.data) {
            for (let i = start; i <= stop; i++) {
                data.push(this.data[i]);
            }
        }

        return data;
    };

    createView = () => {
        return this.head;
    };

    load = (source) => {
        if (source && typeof source === 'string') {
            fetch(source).then(
                (response) => response.json()
            ).then(
                (response) => {

                    if (response.data) this.data = response.data;
                    if (response.header) this.head = response.header;

                    this.setState({
                        status: FetchStatus.ok,
                        total: this.data && Array.isArray(this.data) ? this.data.length : 0,
                    })
                }
            ).catch( (e)=>{
                this.setState({
                    status: FetchStatus.error,
                    message: e.message
                })
            })
        }
    };

    paginationClick = (page) => {
        let nextPage;

        if (page === 'next') {
            nextPage = this.state.page + 1;
        } else if (page === 'prev') {
            nextPage = this.state.page - 1;
        } else {
            nextPage = page;
        }

        this.setState({
            page: nextPage,
        })
    };

    componentDidMount(){
        const {source} = this.props;
        this.load(source);
    }

    render(){
        const {source, pagination, search, rows, showRows, clsSearchBlock, clsSearch, clsRows, searchPlaceholder, rowsPrepend, ...rest} = this.props;
        const {dataView, dataSlice, rowsPerPage, total, page} = this.state;

        const tableData = this.sliceData();
        const tableHeader = this.createView();

        return (
            <div className={'memory-table'}>

                <div className={clsSearchBlock}>
                    <div className={clsSearch}>
                        <Input placeholder={searchPlaceholder}/>
                    </div>
                    <div className={clsRows}>
                        <Select value={rowsPerPage} prepend={rowsPrepend}>
                            {rows.map( (val, index)=>{
                                return <option key={index} value={val}>{val === -1 ? 'All' : val}</option>
                            } )}
                        </Select>
                    </div>
                </div>

                <Table head={tableHeader} data={tableData} {...rest}/>

                {pagination && (
                    <div className={'pagination-wrapper'}>
                        <Pagination total={total} itemsPerPage={rowsPerPage} current={page} onClick={this.paginationClick}/>
                    </div>
                )}
            </div>
        )
    }
}