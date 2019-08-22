import React from "react";
import {Adsense} from "../../../src";
import PrismCode from "../PrismCode";

export default class GuideTemplate extends React.Component {
    render(){
        const codeImport = ``;

        return(
            <div>
                <h1>Title</h1>

                <p className={'text-leader2'}>
                    In Metro 4 for React you can easily convey information through color. Presence of predefined colors and classes for working with them makes the process of color transfer very simple.
                </p>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>

                <h3>Introduction</h3>
                <p>
                    This module contains any classes for set: <code>background</code>, <code>ribbed-background</code>, <code>foreground (text)</code>, <code>outline</code>, <code>border</code> colors from <code>metro</code> color palette.
                    Each color present in three variants: <code>light</code>, <code>normal</code> and <code>dark</code>.
                </p>

                <br/>
                <h3>Importing</h3>
                <PrismCode language="js" code={codeImport}/>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>
            </div>
        )
    }
}