import React from "react";
import {Adsense, Color, Table} from "../../../src";
import PrismCode from "../PrismCode";
import "../../../src/extensions";

export default class ColorStyles extends React.Component {
    render(){
        const codeImportColors = `import {Colors} from metro4-react;`;
        const palette = [];

        for(let c in Color.colorListMetro) {
            palette.push(
                <tr key={c}>
                    <td className={`fg-white bg-light${c.capitalize()}`}>light{c.capitalize()}</td>
                    <td className={`fg-white bg-${c}`}>{c}</td>
                    <td className={`fg-white bg-dark${c.capitalize()}`}>dark{c.capitalize()}</td>
                </tr>
            );
        }

        return(
            <div>
                <h1>Color styles</h1>

                <p className={'text-leader2'}>
                    In Metro 4 for React you can easily convey information through color. Presence of predefined colors and classes for working with them makes the process of color transfer very simple.
                </p>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>

                <h3>Introducing</h3>
                <p>
                    This module contains any classes for set: <code>background</code>, <code>text</code>, <code>outline</code>, <code>border</code> colors from <code>metro</code> color palette.
                    Each color present in three variants: <code>light</code>, <code>normal</code> and <code>dark</code>.
                </p>

                <h3>Palette</h3>
                <Table>{palette}</Table>

                <h3>Importing</h3>
                <PrismCode language="js" code={codeImportColors}/>

                <p>
                    More about additional colors you can read in official <a href={METRO_OFF_SITE}>Metro 4 Documentation</a>.
                </p>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>

            </div>
        )
    }
}