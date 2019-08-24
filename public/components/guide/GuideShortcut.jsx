import React from "react";
import {Adsense, Cell, Shortcut, Table} from "../../../src";
import PrismCode from "../PrismCode";
import Example from "../Example";

export default class GuideTemplate extends React.Component {
    render(){
        const codeImport = `import {Shortcut} from "metro4-react";`;
        const codeUse = `<Shortcut icon="rocket" title="Rocket"/>`;
        const codeUse2 = `<Shortcut image="../images/location.png" title="Location"/>`;
        const codeUse3 = `
            <Shortcut 
                icon="windows" 
                cls="alert" 
                title="Windows" 
                badge={10} 
                clsBadge="bg-white fg-dark"/>`;
        const codeUse4 = `
            <Shortcut as="a" 
                href="#" 
                icon="windows" 
                cls="success" 
                title="Anchor" 
                badge={10}/>`;

        return(
            <div>
                <h1>Shortcut</h1>

                <p className={'text-leader2'}>
                    If you need to create shortcut button, you can use Shortcut component from Metro 4.
                </p>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>

                <h3>Introduction</h3>
                <Example>
                    <Shortcut icon="rocket" title="Rocket"/>
                    &nbsp;<Shortcut icon="share" title="Share" cls="info"/>
                    &nbsp;<Shortcut icon="share" cls="warning no-caption"/>
                    &nbsp;<Shortcut icon="windows" cls="alert" title="Windows" badge={10} clsBadge="bg-white fg-dark"/>
                    &nbsp;<Shortcut as="a" href="#" icon="windows" cls="success" title="Anchor" badge={10}/>
                    &nbsp;<Shortcut image="../images/location.png" title="Location"/>
                </Example>

                <br/>
                <h3>Importing</h3>
                <PrismCode language="js" code={codeImport}/>

                <br/>
                <h4>Props</h4>
                <Table className='table-border cell-border'>
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
                        <td><code>badge</code></td>
                        <td></td>
                        <td>Badge in title</td>
                    </tr>
                    <tr>
                        <td><code>icon</code></td>
                        <td></td>
                        <td>Button icon from icon font</td>
                    </tr>
                    <tr>
                        <td><code>iconPrefix</code></td>
                        <td><code>mif-</code></td>
                        <td>Button icon prefix for icon from icon font</td>
                    </tr>
                    <tr>
                        <td><code>image</code></td>
                        <td></td>
                        <td>Source for button image</td>
                    </tr>
                    <tr>
                        <td><code>cls</code>, <code>className</code></td>
                        <td></td>
                        <td>Button classes</td>
                    </tr>
                    <tr>
                        <td><code>clsTitle</code></td>
                        <td></td>
                        <td>Button class for title (when use prop title)</td>
                    </tr>
                    <tr>
                        <td><code>clsIcon</code></td>
                        <td></td>
                        <td>Button class for icon or image</td>
                    </tr>
                    <tr>
                        <td><code>clsBadge</code></td>
                        <td></td>
                        <td>Button class for badge</td>
                    </tr>
                </Table>

                <br/>
                <h3>Using</h3>
                <PrismCode language="js" code={codeUse}/>
                <PrismCode language="js" code={codeUse2}/>
                <PrismCode language="js" code={codeUse3}/>
                <PrismCode language="js" code={codeUse4}/>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>
            </div>
        )
    }
}