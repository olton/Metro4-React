import React from "react";
import {Adsense, Color, Table} from "../../../index";
import PrismCode from "../PrismCode";
import "../../../src/extensions";
import Article from "../Article";
import GuideLogo from "../GuideLogo";

export default class GuideColorStyles extends React.Component {
    render(){
        const codeImportColors = `import {Colors} from 'metro4-react';`;
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
            <Article>
                <GuideLogo/>
                <h1>Color styles</h1>

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
                <PrismCode language="js" code={codeImportColors}/>

                <br/>
                <h3>Class naming</h3>
                <Table cls={'table-border cell-border'}>
                    <tbody>
                    <tr>
                        <td>background</td>
                        <td><code>bg-*</code></td>
                        <td><code>bg-cyan</code></td>
                        <td className={'bg-cyan'}>bg-cyan</td>
                    </tr>
                    <tr>
                        <td>foreground</td>
                        <td><code>fg-*</code></td>
                        <td><code>fg-cyan</code></td>
                        <td className={'fg-cyan'}>fg-cyan</td>
                    </tr>
                    <tr>
                        <td>ribbed</td>
                        <td><code>ribbed-*</code></td>
                        <td><code>ribbed-cyan</code></td>
                        <td className={'ribbed-cyan'}>ribbed-cyan</td>
                    </tr>
                    <tr>
                        <td>outline</td>
                        <td><code>ol-*</code></td>
                        <td><code>ol-cyan</code></td>
                        <td><span className={'ol-cyan'} style={{outline: '1px solid'}}>ribbed-cyan</span></td>
                    </tr>
                    <tr>
                        <td>border</td>
                        <td><code>bd-*</code></td>
                        <td><code>bd-cyan</code></td>
                        <td><span className={'border bd-cyan'}>ribbed-cyan</span></td>
                    </tr>
                    </tbody>
                </Table>

                <br/>
                <h3>Palette</h3>
                <Table><tbody>{palette}</tbody></Table>

                <p>
                    More about additional colors you can read in official <a href={METRO_OFF_SITE + 'colors.html#_additional_colors'}>Metro 4 Documentation</a>.
                </p>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>

            </Article>
        )
    }
}