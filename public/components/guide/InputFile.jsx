import React from "react";
import {Adsense, Cell, Grid, InputFile, Row, Table} from "../../../index";
import PrismCode from "../PrismCode";
import Example from "../Example";
import {tablePropsHeader} from "../Defs";
import Article from "../Article";
import GuideLogo from "../GuideLogo";

export default class GuideInputFile extends React.Component {
    render(){
        const codeImport = `import {InputFile} from "metro4-react";`;
        const codeUsing = `
            <InputFile/>
            <InputFile buttonIcon={'folder'} buttonTitle={''}/>
            <InputFile buttonIcon={'folder'} buttonTitle={''} customButtons={customButtons} multiple={true}/>
            <InputFile mode={'drop'} multiple={true}/>
        `;

        const customButtons = [
            {
                title: '',
                icon: 'apple',
                image: '',
                cls: 'info',
                onClick: () => {alert('info!')}
            },
            {
                title: '',
                icon: 'rocket',
                iconPrefix: 'fa fa-',
                image: '',
                cls: 'alert',
                onClick: () => {alert('halo!')}
            }
        ];

        const tablePropsBody = [
            ["mode", "input", "Input file mode: <code>input</code> or <code>drop</code>"],
            ["buttonIcon", "null", "Button icon name"],
            ["buttonIconPrefix", "mif-", "Button icon name prefix"],
            ["buttonTitle", "Choose file(s)", "Button title (it is default)"],
            ["dropIcon", "null", "Drop mode icon name"],
            ["dropIconPrefix", "mif-", "Drop mode icon name prefix"],
            ["dropIconSize", "1x", "Drop mode icon size. For Metro icon font can be from 1x to 10x"],
            ["dropTitle", "<strong>Choose a file(s)</strong> or drop it here", "Drop mode main title"],
            ["dropTitleSecondary", "file(s) selected", "Drop mode main secondary title"],
            ["append", "null", "Append data"],
            ["prepend", "null", "Prepend data"],
            ["clear", "true", "Show clear button"],
            ["select", "true", "Show select button"],
            ["customButtons", "[]", "Array of custom buttons"],
            ["cls", "null", "Additional classes for component"],
            ["className", "null", "Additional classes for component"],
            ["clsCaption", "null", "Additional classes caption (select file names)"],
            ["clsAppend", "null", "Additional classes for append"],
            ["clsPrepend", "null", "Additional classes for prepend"],
            ["clsButtonGroup", "null", "Additional classes for custom buttons container"],
            ["clsCustomButton", "null", "Additional classes for custom buttons"],
            ["clsClearButton", "null", "Additional classes for clear button"],
            ["clsSelectButton", "null", "Additional classes for select button"],
            ["onClear", "()=>{}", "Callback for clear event"],
            ["onChange", "()=>{}", "Callback for change event"],
            ["onFocus", "()=>{}", "Callback for focus event"],
            ["onBlur", "()=>{}", "Callback for blur event"],
        ];

        return(
            <Article>
                <GuideLogo/>
                <h1>InputFile</h1>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>

                <h3>Introduction</h3>
                <Example>
                    <Row>
                        <Cell cls={'cell-md-4'}>
                            <InputFile/>
                        </Cell>

                        <Cell cls={'cell-md-4'}>
                            <InputFile buttonIcon={'folder'} buttonTitle={''}/>
                        </Cell>

                        <Cell cls={'cell-md-4'}>
                            <InputFile buttonIcon={'folder'} buttonTitle={''} customButtons={customButtons} multiple={true}/>
                        </Cell>
                    </Row>
                    <br/>
                    <Row>
                        <Cell cls={'cell-md-12'}>
                            <InputFile mode={'drop'} multiple={true}/>
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