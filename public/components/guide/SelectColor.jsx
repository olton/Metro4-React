import React from "react";
import {Adsense, Table, Cell, Row, SelectColor, Color, Icon} from "../../../src";
import PrismCode from "../PrismCode";
import Example from "../Example";
import {tablePropsHeader} from "../Defs";
import Article from "../Article";
import GuideLogo from "../GuideLogo";

export default class GuideSelectColor extends React.Component {
    render(){
        const codeImport = `import {SelectColor} from "metro4-react";`;
        const codeUsing = `<SelectColor source={Color.colorListMetro} prepend="Color: "/>`;
        const codeUsing2 = `
            <SelectColor filter={false} value="#008000" colorNameInCaption={false}>
                <option value="#ff0000">red</option>
                <option value="#008000">green</option>
                <option value="#0000ff">blue</option>
            </SelectColor>
        `;

        const tablePropsBody = [];

        return(
            <Article>
                <GuideLogo/>
                <h1>SelectColor</h1>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>

                <h3>Introduction</h3>
                <Example>
                    <Row>
                        <Cell cls="cell-sm-5">
                            <SelectColor source={Color.colorListMetro} prepend="Color: "/>
                        </Cell>
                        <Cell cls="cell-sm-5">
                            <SelectColor source={Color.colorListStandard} append="your color"/>
                        </Cell>
                        <Cell cls="cell-sm-2">
                            <SelectColor filter={false} value="#008000" showColorName={false} prepend={<Icon name="palette"/>} >
                                <option value="#ff0000">red</option>
                                <option value="#008000">green</option>
                                <option value="#0000ff">blue</option>
                            </SelectColor>
                        </Cell>
                    </Row>
                </Example>

                <br/>
                <h3>Importing</h3>
                <PrismCode language="js" code={codeImport}/>

                <br/>
                <h3>Using</h3>
                <PrismCode language="js" code={codeUsing}/>
                <PrismCode language="js" code={codeUsing2}/>

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