import React from "react";
import {Adsense, Button, ButtonGroup, Row, Cell, Table} from "../../../src";
import PrismCode from "../PrismCode";
import Example from "../Example";
import {tablePropsHeader} from "../Defs";
import Article from "../Article";
import GuideLogo from "../GuideLogo";

export default class GuideButtonGroup extends React.Component {
    render(){
        const codeImport = `import {ButtonGroup} from "metro4-react";`;
        const codeUsing = `
            <ButtonGroup>
                <Button title="1"/>            
                <Button title="2"/>            
                <Button title="3"/>            
            </ButtonGroup>

            <ButtonGroup radio="true">
                <Button title="1"/>            
                <Button title="2"/>            
                <Button title="3"/>            
            </ButtonGroup>
        `;

        const tablePropsBody = [
            ["cls", "null", "Additional classes for component"],
            ["className", "null", "Additional classes for component"],
            ["active", "1", "Number of active button by default, must by int or array of int"],
            ["clsActive", "active", "Class for active button"],
            ["clsButton", "null", "Additional class for buttons"],
            ["onButtonClick", "()=>{}", "Callback for button click event, callback receive a button React element"],
        ];

        return(
            <Article>
                <GuideLogo/>
                <h1>ButtonGroup</h1>

                <p className={'text-leader2'}>
                    ...
                </p>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>

                <h3>Introduction</h3>
                <p>
                    You can group button with component <code>ButtonGroup</code> and set switch mode: <code>check</code> or <code>radio</code>.
                </p>
                <Example>
                    <Row>
                        <Cell cls="cell-md-6">
                            <ButtonGroup>
                                <Button title="1"/>
                                <Button title="2"/>
                                <Button title="3"/>
                            </ButtonGroup>
                        </Cell>
                        <Cell cls="cell-md-6">
                            <ButtonGroup radio={true}>
                                <Button title="1"/>
                                <Button title="2"/>
                                <Button title="3"/>
                            </ButtonGroup>
                        </Cell>
                    </Row>
                </Example>

                <br/>
                <h3>Importing</h3>
                <PrismCode language="js" code={codeImport}/>

                <br/>
                <h3>Using</h3>
                <PrismCode language="js" code={codeUsing}/>

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