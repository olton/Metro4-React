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
        rowsSteps: [-1, 10, 20, 100],
        rows: 10,
        clsSearchBlock: "row",
        clsSearch: "cell-md-9",
        clsRows: "cell-md-3",
        searchPlaceholder: "Search...",
        rowsPrepend: null,
        onHeadClick: () => {},
        onColumnClick: () => {},
    };

    constructor(props){
        super(props);

        this.head = null;
        this.data = null;
        this.table = React.createRef();

        this.state = {
            status: FetchStatus.init,
            rows: props.rows,
            total: 0,
            page: 1,
            sortColumn: 0,
            sortDir: "asc"
        };
    }

    sliceData = () => {
        const {page, rows, total} = this.state;
        let data = [];
        const start = parseInt(rows) === -1 ? 0 : rows * (page - 1),
              stop = parseInt(rows) === -1 ? total - 1 : start + rows - 1;

        if (rows === -1) {
            data = this.data;
        } else
        if (this.data) {
            for (let i = start; i <= stop; i++) {
                data.push(this.data[i]);
            }
        }

        return data;
    };

    createView = () => {
        const {sortColumn, sortDir} = this.state;
        const view = this.head;
        if (view) view.forEach( (el, index) => {
            if (index === sortColumn) {
                el.sortDir = sortDir
            } else {
                el.sortDir = null
            }
        });
        return view;
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

    rowsChange = (e) => {
        const rows = parseInt(e.target.value);
        this.setState({
            rows: rows === -1 ? this.data.length : rows
        });
    };

    sortTable = () => {

    };

    filterTable = () => {

    };

    componentDidMount(){
        const {source} = this.props;
        this.load(source);
    }

    componentWillUnmount(){
    }

    onHeadClick = e => {
        const columnIndex = parseInt(e.target.getAttribute("index"));
        const {sortColumn, sortDir} = this.state;
        if (e.target.className.contains("sortable-column")) {
            this.setState({
                sortColumn: columnIndex,
                sortDir: columnIndex === sortColumn ? sortDir === 'asc' ? 'desc' : 'asc' : 'asc'
            });
        }
        this.props.onHeadClick(e);
    };

    onColumnClick = e => {
        this.props.onColumnClick(e)
    };

    render(){
        const {source, pagination, search, rowsSteps, rows: initRowsCount, clsSearchBlock, clsSearch, clsRows, searchPlaceholder, rowsPrepend, ...rest} = this.props;
        const {rows, total, page} = this.state;

        const tableData = this.sliceData();
        const tableHeader = this.createView();

        return (
            <div className={'memory-table'}>

                <div className={clsSearchBlock}>
                    <div className={clsSearch}>
                        <Input placeholder={searchPlaceholder}/>
                    </div>
                    <div className={clsRows}>
                        <Select value={rows} prepend={rowsPrepend} onChange={this.rowsChange}>
                            {rowsSteps.map( (val, index)=>{
                                return <option key={index} value={val}>{val === -1 ? 'All' : val}</option>
                            } )}
                        </Select>
                    </div>
                </div>

                <Table head={tableHeader} data={tableData} {...rest} ref={this.table} onHeadClick={this.onHeadClick} onColumnClick={this.onColumnClick}/>

                {pagination && (
                    <div className={'pagination-wrapper'}>
                        <Pagination total={total} itemsPerPage={rows} current={page} onClick={this.paginationClick}/>
                    </div>
                )}
            </div>
        )
    }
}