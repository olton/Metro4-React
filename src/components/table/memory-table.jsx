import React from "react";
import Table from "./table";
import Pagination from "../pagination/pagination";
import {FetchStatus} from "../../defines";
import Input from "../input/input";
import Select from "../select/select";
import Utils from "../../routines/utils";

export default class MemoryTable extends React.Component {
    static defaultProps = {
        scrollable: false,
        source: null,
        pagination: true,
        search: true,
        info: true,
        infoTemplate: "Showing $1 to $2 of $3 entries",
        rowsSteps: [-1, 10, 20, 100],
        rows: 10,
        rowsTitle: null,
        searchPlaceholder: "Search...",
        searchFilter: "",
        searchFilterLength: 1,
        searchFilterThreshold: 500,
        clsSearchBlock: "",
        clsSearch: "",
        clsRows: "",
        clsInfoBlock: "",
        clsPagination: "",
        clsPaginationBlock: "",
        clsInfo: "",
        onHeadClick: () => {},
        onCellClick: () => {},
    };

    constructor(props){
        super(props);

        this.head = null;
        this.data = null;
        this.table = React.createRef();
        this.searchThresholdTimer = false;
        this.dataLength = 0;

        this.state = {
            status: FetchStatus.init,
            rows: props.rows,
            page: 1,
            sortColumn: 0,
            sortDir: "asc",
            searchFilter: props.searchFilter
        };
    }

    componentDidMount(){
        const {source} = this.props;
        this.load(source);
    }

    componentWillUnmount(){
    }

    load = (source) => {
        if (source && typeof source === 'string') {
            fetch(source).then(
                (response) => response.json()
            ).then(
                (response) => {

                    if (response.data) this.data = response.data;
                    if (response.header) this.head = response.header;

                    this.dataLength = this.data && Array.isArray(this.data) ? this.data.length : 0;

                    this.setState({
                        status: FetchStatus.ok,
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

    sliceData = () => {
        const {searchFilterLength} = this.props;
        const {page, rows, total, searchFilter} = this.state;
        let data = [], workData;
        const start = parseInt(rows) === -1 ? 0 : rows * (page - 1),
              stop = parseInt(rows) === -1 ? total - 1 : start + rows - 1;

        if (!this.data || this.data.length === 0) return [];

        workData = this.data;

        if (searchFilter !== "" && searchFilter.length >= searchFilterLength) {
            workData = this.searchTable(workData);
        }

        workData = this.sortTable(workData);

        this.dataLength = workData.length;

        if (rows === -1) {
            data = workData;
        } else {
            for (let i = start; i <= stop; i++) {
                if (workData[i]) data.push(workData[i]);
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

    getItemContent = (data) => {
        const {sortColumn} = this.state;
        const format = this.head ? this.head[sortColumn]["format"] : undefined;
        const formatMask = this.head ? this.head[sortColumn]["formatMask"] : undefined;
        const thousandSeparator = this.head ? this.head[sortColumn]["thousandSeparator"] : ",";
        const decimalSeparator = this.head ? this.head[sortColumn]["decimalSeparator"] : ".";

        let result = (""+data).toLowerCase().replace(/[\n\r]+|[\s]{2,}/g, ' ').trim();

        if (result && format) {
            if (['number', 'int', 'float', 'money'].indexOf(format) !== -1 && (thousandSeparator !== "," || decimalSeparator !== "." )) {
                result = Utils.parseNumber(result, thousandSeparator, decimalSeparator);
            }

            switch (format) {
                case "date": result = Utils.isValue(formatMask) ? result.toDate(formatMask) : new Date(result); break;
                case "number": result = Number(result); break;
                case "int": result = parseInt(result); break;
                case "float": result = parseFloat(result); break;
                case "money": result = Utils.parseMoney(result); break;
                case "card": result = Utils.parseCard(result); break;
                case "phone": result = Utils.parsePhone(result); break;
            }
        }

        return result;
    };

    sortTable = (data) => {
        const {sortColumn, sortDir} = this.state;
        return !data ? data : data.sort((a, b)=>{
            const item1 = this.getItemContent(a[sortColumn]),
                  item2 = this.getItemContent(b[sortColumn]);
            let result = 0;
            if (item1 < item2) {
                result = sortDir === 'asc' ? -1 : 1;
            }
            if (item1 > item2) {
                result = sortDir === 'asc' ? 1 : -1;
            }
            return result;
        });
    };

    searchTable = (data) => {
        const {searchFilter} = this.state;
        return data.filter((el)=>{
            let textContent = "";
            for(let i = 0; i < el.length; i++) {
                textContent += " "+el[i];
            }
            return textContent.toLowerCase().includes(searchFilter);
        })
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

    onCellClick = e => {
        this.props.onCellClick(e)
    };

    searchFilterChange = e => {
        const val = e.target.value ? e.target.value.trim() : "";

        clearTimeout(this.searchThresholdTimer);
        this.searchThresholdTimer = false;

        if (!this.searchThresholdTimer) this.searchThresholdTimer = setTimeout( ()=> {
            console.log("threshold");
            this.setState({
                searchFilter: val,
                page: 1
            });

            clearTimeout(this.searchThresholdTimer);
            this.searchThresholdTimer = false;
        }, this.props.searchFilterThreshold);
    };

    render(){
        const {
            source, pagination, search, info, infoTemplate, rowsSteps, rows: initRowsCount,
            clsSearchBlock, clsInfoBlock, clsSearch, clsRows, clsPagination, clsPaginationBlock, clsInfo, searchPlaceholder, rowsTitle,
            searchFilter: initSearchFilter, searchFilterThreshold, searchFilterLength,
            scrollable, decimalSeparator, thousandSeparator,
            ...rest} = this.props;
        const {rows, page, searchFilter} = this.state;

        const dataLength = this.dataLength;
        const dataStart = (rows === -1 ? 1 : (rows * (page - 1)) + 1) + 1;
        const dataStop = (rows === -1 ? dataLength - 1 : dataStart + rows - 1) + 1;

        const tableBody = this.sliceData();
        const tableHeader = this.createView();

        return (
            <div className={'memory-table'}>

                <div className={clsSearchBlock}>
                    <div className={clsSearch}>
                        <Input placeholder={searchPlaceholder} onChange={this.searchFilterChange} onClear={this.searchFilterChange} value={searchFilter}/>
                    </div>
                    <div className={clsRows}>
                        <Select value={rows} prepend={rowsTitle} onChange={this.rowsChange}>
                            {rowsSteps.map( (val, index)=>{
                                return <option key={index} value={val}>{val === -1 ? 'All' : val}</option>
                            } )}
                        </Select>
                    </div>
                </div>

                <div className={'table-container ' + (scrollable ? 'horizontal-scroll':'')}>
                    <Table head={tableHeader} body={tableBody} {...rest} ref={this.table} onHeadClick={this.onHeadClick} onCellClick={this.onCellClick}/>
                </div>

                {(pagination || info) && (
                    <div className={clsInfoBlock}>
                        {info && (
                            <div className={'info-wrapper ' + clsInfo}>
                                <span>{
                                    infoTemplate
                                        .replace("$1", dataStart)
                                        .replace("$2", dataStop)
                                        .replace("$3", dataLength)
                                }</span>
                            </div>
                        )}

                        {pagination && (
                            <div className={'pagination-wrapper ' + clsPaginationBlock}>
                                <Pagination total={dataLength} itemsPerPage={rows} current={page} onClick={this.paginationClick} cls={clsPagination}/>
                            </div>
                        )}
                    </div>
                )}

            </div>
        )
    }
}