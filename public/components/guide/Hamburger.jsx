import React from "react";
import {Adsense, AppBar, AppBarItem, AppBarMenu, Button, Row, Cell, Dropdown, Hamburger, Table} from "../../../index";
import PrismCode from "../PrismCode";
import Example from "../Example";
import {tablePropsHeader} from "../Defs";
import Article from "../Article";
import GuideLogo from "../GuideLogo";

export default class GuideHamburger extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            hamburgerState: false
        }
        this.toggleHamburger = this.toggleHamburger.bind(this);
    }

    toggleHamburger() {
        this.setState({
            hamburgerState: !this.state.hamburgerState
        })
    };

    render(){
        const {hamburgerState} = this.state;
        const codeImport = `import {Hamburger} from "metro4-react";`;
        const codeUsing = `
            <Hamburger/>
            <Hamburger theme="dark"/>
            <Hamburger variant="arrow-left" active="true"/>                    
        `;

        const tablePropsBody = [
            ["cls", "null", "Additional classes for component"],
            ["className", "null", "Additional classes for component"],
            ["variant", "menu-down", "Hamburger transform variant: <code>menu-down</code>, <code>menu-up</code>, <code>arrow-left</code>, <code>arrow-right</code>"],
            ["theme", "light", "Color theme: <code>light</code>, <code>dark</code>"],
            ["active", "false", "Hamburger state"],
            ["onClick", "()=>{}", "Hamburger click event callback"],
        ];

        return(
            <Article>
                <GuideLogo/>
                <h1>Hamburger</h1>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>

                <h3>Introduction</h3>
                <p>
                    <code>Hamburger</code> is a special type of button to show and toggle open/close state of any components, example - <code>AppBar</code>.
                    This button can transform from one state to any.
                </p>
                <Example>
                    <AppBar cls={'pos-relative z-dropdown'} hamburgerColor={'dark'} expandPoint={null}>
                        <AppBarItem isBrand={true} name={'Metro 4 for React'}/>
                        <AppBarMenu cls={'ml-auto'} >
                            <li><a href={'#'}>Home</a></li>
                            <li><a href={'#'}>Documentation</a></li>
                            <li><a href={'#'}>GitHub</a></li>
                        </AppBarMenu>
                    </AppBar>
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
                <h4>Hamburger themes</h4>
                <Example>
                    <Row>
                        <Cell cls="cell-md-6 bg-dark">
                            <Hamburger/>
                            <span className="fg-white ml-4">Theme <code>light</code> (default)</span>
                        </Cell>
                        <Cell cls="cell-md-6">
                            <Hamburger theme="dark"/>
                            <span className="ml-4">Theme <code>dark</code></span>
                        </Cell>
                    </Row>
                </Example>

                <br/>
                <h4>Hamburger variants</h4>
                <Example>
                    <Row>
                        <Cell cls="cell-md-6">
                            <Button onClick={this.toggleHamburger} title="Toggle Hamburger"/>
                        </Cell>
                        <Cell cls="cell-md-6">
                            <Hamburger variant="arrow-left" active={hamburgerState} theme="dark"/>
                            <Hamburger variant="arrow-right" active={hamburgerState} theme="dark"/>
                            <Hamburger variant="menu-down" active={hamburgerState} theme="dark"/>
                            <Hamburger variant="menu-up" active={hamburgerState} theme="dark"/>
                        </Cell>
                    </Row>
                </Example>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>
            </Article>
        )
    }
}