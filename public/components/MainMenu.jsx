import React from "react";
import {Link} from "react-router-dom";
import {Container, AppBar, AppBarBrand, AppBarMenu, Icon} from "../../src/index";

export default class MainMenu extends React.Component {
    render(){
        return (
            <Container fluid={true} cls={'pos-fixed fixed-top z-top bg-react'}>
                <AppBar cls={'container app-bar-expand pos-relative'}>
                    <AppBarBrand name={'Metro 4 for React'} cls={'fg-react'}/>
                    <AppBarMenu cls={'ml-auto'}>
                        <li><Link to="/guide">Guide</Link></li>
                        <li><Link to="/support" className="text-bold fg-yellow"><span className="d-block ani-vertical-">Support Me</span></Link></li>
                        <li>
                            <Link to="https://github.com/olton/Metro4-React" target="_blank">
                                <Icon name={'github'} size={'2x'} cls={'d-none d-block-md'}/>
                                <span className="d-block d-none-md">Github</span>
                            </Link>
                        </li>
                    </AppBarMenu>
                </AppBar>
            </Container>
        )
    }
}
