import "@fortawesome/fontawesome-free/css/all.css";
import React from "react";
import {Adsense, Table, Button, Cell} from "../../../src";
import PrismCode from "../PrismCode";
import Defs, {tablePropsHeader} from "../Defs";

export default class GuideButton extends React.Component {
    render(){
        const codeImport = `import {Button} from "metro4-react";`;
        const codeDefaultUse = `
            <Button title="Button">
            <Button>Button</Button>
        `;
        const codeAddIcon = `
            <Button icon='rocket'/>
            <Button icon='rocket' iconPrefix="fa fa-"/>
            <Button image='images/location.png'/>
        `;
        const codeAddBadge = `<Button icon="envelop" badge={10} clsBadge={'alert'}/>`;
        const codeSemanticUse = `<Button as='a' title='This is link' href='https://metroui.org.ua'/>`;

        const codeCLassesUse = `<Button title='Button' cls='alert' clsTitle='fg-yellow'/>`;

        const tablePropsData = [
            ["<code>as</code>", "<code>button</code>", "Semantic element"],
            ["<code>title</code>", "", "Button title"],
            ["<code>badge</code>", "<code>null</code>", "Button badge value"],
            ["<code>icon</code>", "<code>null</code>", "Button icon from icon font"],
            ["<code>iconPrefix</code>", "<code>mif-</code>", "Button icon prefix"],
            ["<code>image</code>", "<code>null</code>", "Button icon image"],
            ["<code>cls</code>", "", "Button additional classes"],
            ["<code>className</code>", "", "Button additional classes"],
            ["<code>classTitle</code>", "", "Button additional classes for title"],
            ["<code>classIcon</code>", "", "Button additional classes for icon"],
            ["<code>classBadge</code>", "", "Button additional classes for badge"],
        ];

        return(
            <div>
                <h1>Push button</h1>
                <p className='text-leader2'>
                    With the Metro 4 you can easily create different types of stylized push buttons.
                </p>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>

                <h3>Introduction</h3>
                <div className='example'>
                    <Button title='Button'/>
                    &nbsp;<Button cls="alert" title='Button'/>
                    &nbsp;<Button cls="info" title='Button' icon="rocket"/>
                    &nbsp;<Button cls="warning" icon="bell"/>
                    &nbsp;<Button as="a" cls="secondary" title="Link as Button" href="#"/>
                    &nbsp;<Button as="span" cls="primary" title="Span as Button"/>
                    &nbsp;<Button title="Flat Button" cls={'flat-button'}/>
                    &nbsp;<Button icon="envelop" badge={10} clsBadge={'alert'}/>
                </div>

                <br/>
                <h3>Importing</h3>
                <PrismCode language="js" code={codeImport}/>

                <br/>
                <h4>Props</h4>
                <Table className='table-border cell-border' head={tablePropsHeader} body={tablePropsData}/>

                <br/>
                <h3>Using</h3>

                <h5>Default</h5>
                <div className={'example'}>
                    <Button title={'Button'}/>
                    &nbsp;<Button>Button</Button>
                </div>
                <PrismCode language="jsx" code={codeDefaultUse}/>

                <h5>Create as anchor</h5>
                <div className={'example'}>
                    <Button as='a' title='This is link' href='https://metroui.org.ua'/>
                </div>
                <PrismCode language="jsx" code={codeSemanticUse}/>

                <h5>Add icon</h5>
                <div className={'example'}>
                    <Button icon={'rocket'}/>
                    &nbsp;<Button icon='rocket' iconPrefix="fa fa-"/>
                    &nbsp;<Button image='../images/location.png'/>
                </div>
                <PrismCode language="jsx" code={codeAddIcon}/>

                <h5>Add badge</h5>
                <div className={'example'}>
                    <Button icon="envelop" badge={10} clsBadge={'alert'}/>
                </div>
                <PrismCode language="jsx" code={codeAddBadge}/>

                <h5>Use classes</h5>
                <div className='example'>
                    <Button title='Button' cls='alert' clsTitle='fg-yellow'/>
                </div>
                <PrismCode language="jsx" code={codeCLassesUse}/>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>
            </div>
        )
    }
}