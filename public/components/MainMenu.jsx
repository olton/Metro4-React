import React from "react";
import {Link} from "react-router-dom";
import {Container, AppBar, AppBarItem, AppBarMenu, Icon} from "../../src/index";

const MainMenu = ({fullSize = false}) => {
    return (
        <Container fluid={true} cls={'pos-fixed fixed-top z-fixed bg-react'}>
            <AppBar cls={(fullSize ? '': 'container') + ' pos-relative app-bar-react-colors'} expandPoint={'md'} hamburgerColor={'light'}>
                <AppBarItem isBrand={true} as={'a'} href={'/'} name={'Metro 4 for React'} cls={'text-bold fg-react'}/>
                <AppBarMenu cls={'ml-auto'}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/guide">Guide</Link></li>
                    <li><Link to="/demo">Demo</Link></li>
                    <li><a href="https://www.patreon.com/metro4_react" target={'_blank'} className="text-bold fg-yellow"><span className="d-block ani-vertical-">Support Project</span></a></li>
                    <li>
                        <a href="https://github.com/olton/Metro4-React" target="_blank">
                            <Icon name={'github'} size={'2x'} cls={'d-none d-block-md'}/>
                            <span className="d-block d-none-md">Github</span>
                        </a>
                    </li>
                </AppBarMenu>
            </AppBar>
        </Container>
    )
};

export default MainMenu;
