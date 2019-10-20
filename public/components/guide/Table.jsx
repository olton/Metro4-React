import React from "react";
import {Adsense} from "../../../index";
import PrismCode from "../PrismCode";
import Example from "../Example";
import Defs, {tablePropsHeader} from "../Defs";
import Table from "../../../src/components/table/table";
import Article from "../Article";
import GuideLogo from "../GuideLogo";

export default class GuideTable extends React.Component {
    render(){
        const codeImport = `import {Table} from "metro4-react";`;
        const codeUseDirectly = `
            <Table cls="table">
                <thead>
                    <tr>
                        <td>...</td>
                        ...                        
                        <td>...</td>                        
                    </tr>                
                </thead>            
                <tbody>
                    <tr>
                        <td>...</td>
                        ...                        
                        <td>...</td>                        
                    </tr>                
                </tbody>            
            </Table>
        `;
        const codeUseArray = `
            const tablePropsHeader = [
                {
                    name: "prop",
                    title: "Property",
                    template: "<code>%VAL%</code>"
                },
                {
                    name: "defValue",
                    title: "Default Value",
                },
                {
                    name: "desc",
                    title: "Description",
                },
            ];
            
            const tablePropsData = [
                ["mode", "normal", "Table mode: normal, static. When static, sortable classes will not be drawn."],
                ["head", "null", "Table head. This is a array of table head cells"],
                ["body", "null", "Table body. This is a array of table body cells"],
                ["cls", "", "Table classes"],
                ["className", "", "Table classes"],
                ["clsHeadRow", "", "Table classes for head row"],
                ["clsHeadCell", "", "Table classes for head cell"],
                ["clsBodyRow", "", "Table classes for body row"],
                ["clsBodyCell", "", "Table classes for body cell"],
                ["onHeadClick", "", "Callback for head cell click event"],
                ["onCellClick", "", "Callback for body cell click event"],
                ["onDrawCell", "", "Callback for body cell draw event"],
            ];
            
            <Table head={tablePropsHeader} body={tablePropsData} className="table-border cell-border"/>
        `;

        const codeUseArrayForBody = `
        [
            ["clsHeadRow", "empty", "Table classes for head row"],
            ["clsHeadCell", "empty", "Table classes for head cell"],
            ["clsBodyRow", "empty", "Table classes for body row"],
            ["clsBodyCell", "empty", "Table classes for body cell"],
            ["onHeadClick", "()=>{}", "Callback for head cell click event"],
            ["onCellClick", "()=>{}", "Callback for body cell click event"]
        ]`;

        const tablePropsData = [
            ["mode", "normal", "Table mode: <code>normal</code>, <code>static</code>. When static, sortable classes will not be drawn."],
            ["head", "null", "Table head. This is a array of table head cells"],
            ["body", "null", "Table body. This is a array of table body cells"],
            ["cls, className", "empty", "Table classes"],
            ["clsHeadRow", "empty", "Table classes for head row"],
            ["clsHeadCell", "empty", "Table classes for head cell"],
            ["clsBodyRow", "empty", "Table classes for body row"],
            ["clsBodyCell", "empty", "Table classes for body cell"],
            ["onHeadClick", "()=>{}", "Callback for head cell click event"],
            ["onCellClick", "()=>{}", "Callback for body cell click event"],
            ["onDrawCell", "()=>{}", "Callback for body cell draw event"],
        ];

        const tableDefineHeadProps = [
            ["name", "Field name"],
            ["title", "Field caption"],
            ["sortable", "The field can participate in sorting."],
            ["sortDir", "Sort direction: asc, desc"],
            ["cls", "Additional classes for head cell"],
            ["clsColumn", "Additional classes for body cell"],
            ["size", "Fixed size for body cell"],
            ["format", "Body cell data format: date, number, int, float, money, card, phone. This field used in extended components such as <code>&lt;MemoryTable/&gt;</code>"],
            ["formatMask", "Format mask template for data manipulate when sort"],
            ["thousandSeparator", "Separator for divide thousands, default is <code>,</code>"],
            ["decimalSeparator", "Separator for divide decimal part, default is <code>.</code>"],
        ];

        return(
            <Article>
                <GuideLogo/>
                <h1>Table</h1>

                <p className={'text-leader2'}>
                    You can draw table from array or directly.
                </p>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>

                <h3>Importing</h3>
                <PrismCode language="js" code={codeImport}/>

                <br/>
                <h4>Props</h4>
                <Table head={tablePropsHeader} body={tablePropsData} className="table-border cell-border"/>

                <br/>
                <h3>Using</h3>
                <p>
                    You can add data to the table either directly, using the table layout or from arrays using special props tables.
                </p>

                <br/>
                <h4>Directly</h4>
                <PrismCode language="js" code={codeUseDirectly}/>

                <br/>
                <h4>Data from array</h4>
                <p>
                    When you add data to table from arrays, you can define two arrays: <code>head</code> and <code>body</code>.
                </p>
                <PrismCode language="js" code={codeUseArray}/>

                <br/>
                <h4>Define table head with array</h4>
                <p>When you define table head from array, you can use next props:</p>
                <Table className="table-border cell-border" body={tableDefineHeadProps} onDrawCell={ (val, props, index)=> index === 0 ? "<code>"+val+"</code>" : val}/>

                <br/>
                <h4>Define table body with array</h4>
                <p>Each item must be an array of values.</p>
                <PrismCode language="js" code={codeUseArrayForBody}/>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>
            </Article>
        )
    }
}