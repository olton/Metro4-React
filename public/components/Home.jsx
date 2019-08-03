import React from "react";
import {Link} from "react-router-dom";
import MainMenu from "./MainMenu";
import {
    Container,
    Hero,
    Row,
    Cell,
    InfoPanel,
    InfoPanelTitle, InfoPanelContent, InfoPanelFooter,
    Icon,
} from "../../src/index";

import "../css/home.less";

export default class Home extends React.Component {
    render(){
        console.log("Home");
        return (
            <div>
                <MainMenu/>
                <Hero>
                    <h1 className={'text-center fg-react'}><span className={'reduce-2 enlarge-3-md'}>Metro 4 for React</span></h1>
                    <h5 className="text-center fg-white text-upper text-light">
                        <div className={'reduce-2 enlarge-2-md'}>
                        Impressive components library
                        <span className="d-none-md1"><br/></span>
                        built on HTML, CSS, JavaScript
                        </div>
                    </h5>
                </Hero>

                <Container fluid={true} cls={'mt-20-md-minus'}>
                    <Container>
                        <Row>
                            <Cell cls={'cell-md-4 pt-4'}>
                                <InfoPanel cls={'win-shadow h-100'}>
                                    <InfoPanelTitle cls={'bg-blue fg-white'}>OPEN SOURCE</InfoPanelTitle>
                                    <InfoPanelContent cls={'text-leader2'}>
                                        <div className={'mx-10 my-6'}>
                                            <Icon name={'file-code'} size={'8x'} cls={'fg-lightGray'}/>
                                        </div>
                                        Metro 4 is an open source project
                                    </InfoPanelContent>
                                    <InfoPanelFooter>
                                        <a href="https://github.com/olton/Metro4-React/releases" className="button large rounded info">Download</a>
                                    </InfoPanelFooter>
                                </InfoPanel>
                            </Cell>
                            <Cell cls={'cell-md-4 pt-4'}>
                                <InfoPanel cls={'win-shadow h-100'}>
                                    <InfoPanelTitle cls={'bg-blue fg-white'}>EASY TO USE</InfoPanelTitle>
                                    <InfoPanelContent cls={'text-leader2'}>
                                        <div className={'mx-10 my-6'}>
                                            <Icon name={'rocket'} size={'8x'} cls={'fg-lightGray'}/>
                                        </div>
                                        To use Metro 4 you do not even need to know javascript
                                    </InfoPanelContent>
                                    <InfoPanelFooter>
                                        <Link to="/download" className="button large rounded info">Get started</Link>
                                    </InfoPanelFooter>
                                </InfoPanel>
                            </Cell>
                            <Cell cls={'cell-md-4 pt-4'}>
                                <InfoPanel cls={'win-shadow h-100'}>
                                    <InfoPanelTitle cls={'bg-blue fg-white'}>FOR DEVELOPERS</InfoPanelTitle>
                                    <InfoPanelContent cls={'text-leader2'}>
                                        <div className={'mx-10 my-6'}>
                                            <Icon name={'github'} size={'8x'} cls={'fg-lightGray'}/>
                                        </div>
                                        Metro 4 is easily expandable to your own needs
                                    </InfoPanelContent>
                                    <InfoPanelFooter>
                                        <a href="https://github.com/olton/Metro4-React" className="button large rounded info">Get source</a>
                                    </InfoPanelFooter>
                                </InfoPanel>
                            </Cell>
                        </Row>
                    </Container>
                </Container>
            </div>
        )
    }
}