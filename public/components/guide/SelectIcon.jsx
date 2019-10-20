import React from "react";
import {Adsense, Table, Cell, Row, SelectIcon, Color} from "../../../index";
import PrismCode from "../PrismCode";
import Example from "../Example";
import {tablePropsHeader} from "../Defs";
import Article from "../Article";
import GuideLogo from "../GuideLogo";

export default class GuideSelectIcon extends React.Component {
    render(){
        const codeImport = `import {SelectIcon} from "metro4-react";`;
        const codeUsing = `<SelectIcon source="/data/font.svg"/>`;

        const tablePropsBody = [];

        return(
            <Article>
                <GuideLogo/>
                <h1>SelectIcon</h1>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>

                <h3>Introduction</h3>
                <Example>
                    <Row>
                        <Cell cls="cell-sm-3">
                            <SelectIcon source="/data/metro.svg"/>
                        </Cell>
                        <Cell cls="cell-sm-3">
                            <SelectIcon source="/data/fa.svg" viewBoxWidth={512} viewBoxHeight={448}/>
                        </Cell>
                        <Cell cls="cell-sm-3">
                            <SelectIcon source="/data/icofont.svg" viewBoxWidth={1000} viewBoxHeight={850}/>
                        </Cell>
                        <Cell cls="cell-sm-3">
                            <SelectIcon source="/data/fa.svg" viewBoxWidth={512} viewBoxHeight={448} nameInCaption={false} nameInItem={false}/>
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