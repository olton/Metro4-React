import React from "react";
import {Adsense, Table, Cell, Row, Select, Color, Icon} from "../../../index";
import PrismCode from "../PrismCode";
import Example from "../Example";
import {tablePropsHeader} from "../Defs";
import Article from "../Article";
import GuideLogo from "../GuideLogo";

export default class GuideSelect extends React.Component {
    render(){
        const codeImport = `import {Select} from "metro4-react";`;
        const codeUsing = `
        <Select>
            <option value="1">Item 1</option>
            ...
            <option value="2">Item 2</option>
        </Select>`;
        const codeUsingWithObject = `
            const options = {
                "red": "#ff0000",
                "green": "#008000",
                "blue": "0000ff"            
            };
            
            <Select source={options}/>
        `;

        const tablePropsBody = [];

        const demoOptions = {
            "red": "#ff0000",
            "green": "#008000",
            "blue": "0000ff"
        };

        return(
            <Article>
                <GuideLogo/>
                <h1>Select</h1>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>

                <h3>Introduction</h3>
                <Example>
                    <Row>
                        <Cell cls="cell-sm-6">
                            <Select>
                                <option value="#ff0000">red</option>
                                <option value="#008000">green</option>
                                <option value="#0000ff">blue</option>
                            </Select>
                        </Cell>
                        <Cell cls="cell-sm-6">
                            <Select source={demoOptions}/>
                        </Cell>
                    </Row>

                    <Row>
                        <Cell cls="cell-sm-6">
                            <Select prepend="Select color: " source={demoOptions}/>
                        </Cell>
                        <Cell cls="cell-sm-6">
                            <Select append="Your color" source={demoOptions}/>
                        </Cell>
                    </Row>
                    <Row>
                        <Cell cls="cell-sm-6">
                            <Select prepend={<Icon name="rocket"/>} source={demoOptions}/>
                        </Cell>
                        <Cell cls="cell-sm-6">
                            <Select append={<Icon name="palette"/>} source={demoOptions}/>
                        </Cell>
                    </Row>
                </Example>

                <br/>
                <h3>Importing</h3>
                <PrismCode language="js" code={codeImport}/>

                <br/>
                <h3>Using</h3>
                <PrismCode language="js" code={codeUsing}/>
                <PrismCode language="js" code={codeUsingWithObject}/>

                <br/>
                <h4>Props</h4>
                <Table className="table-border cell-border" head={tablePropsHeader} body={tablePropsBody}/>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>
            </Article>
        )
    }
}