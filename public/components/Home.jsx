import React from "react";
import MainMenu from "./MainMenu";
import {
    Adsense,
    Container,
    Hero,
    Row,
    Cell,
    Icon, Button,
} from "../../index";

import "../css/home.css";
import LogoSocial from "../images/logo-social.png";

export default class Home extends React.Component {

    constructor(props){
        super(props);
        this.version = React.createRef();
    }

    componentDidMount(){
        fetch("package.json").then(
            response => response.json()
        ).then(
            response => this.version.current.innerText = response.version
        )
    }

    render(){
        return (
            <React.Fragment>
                <MainMenu/>
                <Hero cls={'add-neb'}>
                    <h1 className={'text-center fg-react'}><span className={'reduce-2 enlarge-3-md'}>Metro 4 for React</span></h1>
                    <h5 className="text-center fg-white text-upper text-light">
                        <div className={'reduce-2 enlarge-2-md'}>
                        Impressive components library
                        <span className="d-none-md1"><br/></span>
                        built on HTML, CSS, JavaScript
                        </div>
                    </h5>

                    <h4 className={'text-center fg-white'}>&#123; <span ref={this.version}>0.0.1</span> &#125;</h4>

                    <div className={'text-center mt-10'}>
                        <Button as={'a'} href={'/guide'} cls={'bg-react-text fg-white-hover'}>Get started</Button>
                        &nbsp;&nbsp;<a href="https://www.patreon.com/metro4_react">
                            <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160"/>
                        </a>
                        <Button as={'a'} href={'https://github.com/olton/Metro4-React'} cls={'fg-react link fg-white-hover no-decor'}>Get source <Icon name={'arrow-right'}/></Button>
                    </div>
                </Hero>

                <Container fluid={true} cls="add-neb about-wrapper">
                    <Container cls={'text-center p-6 p-20-md'}>

                        <h1>What is it?</h1>
                        <div className={'text-leader pl-20-md pr-20-md'}>
                            Metro 4 for React is an open source toolkit for developing with HTML, CSS, and JS for ReactJS. Quickly prototype your ideas or build your entire app with extensive prebuilt components.
                        </div>

                        <br/>
                        <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                        <br/>

                        <br/>
                        <div className={'text-leader2 text-center text-bold'}>Metro 4 for React contains:</div>
                        <br/>

                        <div>
                            <Row>
                                <Cell cls={'cell-md-4'}>
                                    <Icon name={'embed2'} size={'8x'} cls={'fg-darkGray'}/>
                                    <h4 className="mt-4">Base styles</h4>
                                    <p>
                                        Includes various styles for changing the appearance of html elements.
                                    </p>
                                </Cell>
                                <Cell cls={'cell-md-4'}>
                                    <Icon name={'library'} size={'8x'} cls={'fg-darkGray'}/>
                                    <h4 className="mt-4">100+</h4>
                                    <p>
                                        Contains more than 100 components are available to you to solve almost all tasks.
                                    </p>
                                </Cell>
                                <Cell cls={'cell-md-4'}>
                                    <Icon name={'cogs'} size={'8x'} cls={'fg-darkGray'}/>
                                    <h4 className="mt-4">Tools and Routines</h4>
                                    <p>
                                        Includes Various built-in tool functions and classes will increase your productivity.
                                    </p>
                                </Cell>
                            </Row>

                            <Row>
                                <Cell cls={'cell-md-4'}>
                                    <Icon name={'bug'} size={'8x'} cls={'fg-darkGray'}/>
                                    <h4 className="mt-4">Issues</h4>
                                    <p>
                                        Rapid response to detected bugs and their elimination.
                                    </p>
                                </Cell>
                                <Cell cls={'cell-md-4'}>
                                    <Icon name={'help'} size={'8x'} cls={'fg-darkGray'}/>
                                    <h4 className="mt-4">Guide</h4>
                                    <p>
                                        Detailed description of all components of the Metro 4 for React.
                                    </p>
                                </Cell>
                                <Cell cls={'cell-md-4'}>
                                    <Icon name={'bubbles'} size={'8x'} cls={'fg-darkGray'}/>
                                    <h4 className="mt-4">Community</h4>
                                    <p>
                                        Get additional help from the Metro 4 for React community.
                                    </p>
                                </Cell>
                            </Row>
                        </div>

                        <br/>
                        <br/>
                    </Container>
                </Container>

                <Container fluid={true} className="who-uses-wrapper">
                    <Container cls="p-4">
                        <div className="h1 text-center"><span className="reduce-1 enlarge-1-md">Who uses</span></div>

                        <Row className="who-uses">
                            <Cell className="cell-md-4"/>
                            <Cell className="cell-md-4">
                                <a href="https://mirohost.net"><img src="images/mirohost_logo.svg"/></a>
                            </Cell>
                            <Cell className="cell-md-4"/>
                        </Row>
                    </Container>
                </Container>

                <Container as={'footer'} fluid={true} cls={'bg-react'}>
                    <Container cls={'pt-8 pb-8'}>
                        <div className="text-center">
                            <ul className="inline-list reduce-1" id="social-menu">
                                <li><a href="https://www.facebook.com/groups/metro4.libary/"><Icon name={'facebook'} cls={'fg-react'}/></a></li>
                                <li><a href="https://twitter.com/MetroUI"><Icon name={'twitter'} cls={'fg-react'}/></a></li>
                                <li><a href="#"><Icon name={'youtube'} cls={'fg-react'}/></a></li>
                                <li><a href="https://github.com/olton/Metro4-React"><Icon name={'github'} cls={'fg-react'}/></a>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center mt-10">
                            <ul className="inline-list reduce-1" id="footer-menu">
                                <li><a href="https://github.com/olton/Metro-UI-CSS/blob/master/LICENSE">License</a></li>
                                <li><a href="mailto:sergey@pimenov.com.ua">Author</a></li>
                                <li><a href="https://forum.metroui.org.ua">Forum</a></li>
                                <li><a href="https://github.com/olton/Metro-UI-CSS/issues">Issues</a></li>
                                <li><a href="https://github.com/olton/Metro-UI-CSS/releases">Releases</a></li>
                            </ul>
                        </div>

                        <div className="text-center m-10">
                            <span className="h2"><span className="fg-blue">Made in </span><span className="fg-yellow">Ukraine</span></span>
                        </div>

                        <div className="text-center mt-10 reduce-1 fg-light">
                            Metro 4 for React &copy; 2019 by <a href="mailto:sergey@pimenov.com.ua" className="no-wrap">Sergey Pimenov</a>.
                            <br/>
                            <span className="no-wrap">Domain by <a href="https://imena.ua/">Imena.ua</a>.</span>
                            &nbsp;<span className="no-wrap">Hosting by <a href="https://mirohost.net/">Mirohost</a>.</span>
                            <br/>
                            <span className="no-wrap">Metro CDN by <a href="https://www.keycdn.com/">KeyCDN</a>.</span>
                            <br/>
                            <span className="no-wrap">IDE PhpStorm by <a href="https://www.jetbrains.com/">JetBrains</a>.</span>
                            <br/>
                            &nbsp;Code licensed <a href="https://github.com/olton/Metro4-React/blob/master/LICENSE">MIT</a>,
                            Docs <a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>.
                        </div>

                    </Container>
                </Container>
            </React.Fragment>
        )
    }
}