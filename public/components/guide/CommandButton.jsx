import React from "react";
import {Adsense, Cell, CommandButton, Table} from "../../../index";
import PrismCode from "../PrismCode";
import Defs, {tablePropsHeader} from "../Defs";
import Article from "../Article";
import GuideLogo from "../GuideLogo";

export default class GuideCommandButton extends React.Component {
    render(){
        const codeImport = `import {CommandButton} from "metro4-react";`;
        const codeUsing = `
            <CommandButton 
                icon="share" 
                title="Yes, share and connect" 
                subtitle="Use this option for home or work"/>`;

        const codeUsing2 = `
            <CommandButton as={'a'} 
                icon="share" 
                title="Yes, share and connect" 
                subtitle="Use this option for home or work" 
                cls="icon-right info fg-white"/>`;

        return(
            <Article>
                <GuideLogo/>
                <h1>Command button</h1>

                <p className={'text-leader2'}>
                    With the Metro 4 you can easily create different types of stylized windows command buttons.
                </p>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>

                <h3>Introduction</h3>
                <div className='example'>
                    <CommandButton icon="share" title="Yes, share and connect" subtitle="Use this option for home or work"/>
                    &nbsp;<CommandButton as={'a'} icon="share" title="Yes, share and connect" subtitle="Use this option for home or work" cls="icon-right info fg-white"/>
                </div>

                <br/>
                <h3>Importing</h3>
                <PrismCode language="js" code={codeImport}/>

                <br/>
                <h4>Props</h4>
                <Table className='table-border cell-border' head={tablePropsHeader}>
                    <tbody>
                    <tr>
                        <td><code>as</code></td>
                        <td><code>button</code></td>
                        <td>Semantic element</td>
                    </tr>
                    <tr>
                        <td><code>title</code></td>
                        <td></td>
                        <td>Button title</td>
                    </tr>
                    <tr>
                        <td><code>subtitle</code></td>
                        <td></td>
                        <td>Button subtitle</td>
                    </tr>
                    <tr>
                        <td><code>icon</code></td>
                        <td></td>
                        <td>Button icon</td>
                    </tr>
                    <tr>
                        <td><code>iconPrefix</code></td>
                        <td><code>mif-</code></td>
                        <td>Button icon prefix (example: for Font Awesome prefix is <code>fa fa-</code>)</td>
                    </tr>
                    <tr>
                        <td><code>image</code></td>
                        <td></td>
                        <td>Button image source</td>
                    </tr>
                    <tr>
                        <td><code>cls</code>, <code>className</code></td>
                        <td></td>
                        <td>Button classes</td>
                    </tr>
                    <tr>
                        <td><code>clsTitle</code></td>
                        <td></td>
                        <td>Class for title and subtitle</td>
                    </tr>
                    <tr>
                        <td><code>clsSubtitle</code></td>
                        <td></td>
                        <td>Class for subtitle only</td>
                    </tr>
                    <tr>
                        <td><code>clsIcon</code></td>
                        <td></td>
                        <td>Class for button icon or image</td>
                    </tr>
                    </tbody>
                </Table>

                <br/>
                <h3>Using</h3>
                <PrismCode language="js" code={codeUsing}/>
                <PrismCode language="js" code={codeUsing2}/>


                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>
            </Article>
        )
    }
}