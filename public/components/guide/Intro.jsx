import React from "react";
import PrismCode from "../PrismCode";
import {Adsense, Container} from "../../../src";

const codeInstall = `> npm install metro4-react`;
const codeImportCommon = `import 'metro4-react/common';`;
const codeImportComponent = `import {Button} from "metro4-react";`;

export default class GuideIntro extends React.Component {
    render(){
        return(
            <div className={'pl-10-md pr-10-md'}>
                <h1>Intro</h1>
                <div className={'text-leader2'}>
                    Metro 4 for React is a complete re-implementation of the <a href={'https://metroui.org.ua'}>Metro 4</a> components library using React.
                    If you have React setup and Metro 4 for React installed you have everything you need.
                    Metro 4 for React is a collection of over 100+ components ready to use in your reactive application.
                </div>

                <div className={'remark success'}>
                    <strong> It has no dependency on jQuery or others.</strong>
                </div>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>

                <br/>
                <h3>Installation</h3>
                <p>
                    The best way to consume <code>Metro 4 for React</code> is via the <code>npm package</code> which you can install with <code>npm</code>.
                </p>
                <PrismCode language={'shell'} code={codeInstall}/>

                <br/>
                <h3>Importing</h3>
                <p>
                    Before using Metro 4 for React components, you must import <code>common styles</code>.
                </p>
                <PrismCode language="js" code={codeImportCommon}/>

                <p>
                    You should import individual components like: <code>metro4-react/Button</code> rather than the entire library.
                    Doing so pulls in only the specific components that you use, which can significantly reduce the amount of code you end up sending to the client.
                </p>
                <PrismCode language="js" code={codeImportComponent}/>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>

            </div>
        )
    }
}