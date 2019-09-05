import React from "react";
import { Switch, Route } from 'react-router-dom';
import {
    Container, Row, Cell, MediaPoints,
} from "../../src";
import MainMenu from "./MainMenu";
import SideMenu from "./SideMenu";
import "../css/guide.less";
import NotFound from "./NotFound";
import GuideIntro from "./guide/Intro";
import GuideCommon from "./guide/Common";
import GuideColorStyles from "./guide/ColorStyles";
import GuideGrid from "./guide/Grid";
import GuidePushButton from './guide/PushButton';
import GuideSplitButton from './guide/SplitButton';
import GuideToolButton from './guide/ToolButton';
import GuideCommandButton from './guide/CommandButton';
import GuideInfoButton from './guide/InfoButton';
import GuideImageButton from "./guide/ImageButton";
import GuideActionButton from "./guide/ActionButton";
import GuideShortcut from "./guide/Shortcut";
import GuideTable from "./guide/Table";
import GuideMemoryTable from "./guide/MemoryTable";
import GuidePagination from "./guide/Pagination";
import GuideBreadcrumbs from "./guide/Breadcrumbs";
import GuideHamburger from "./guide/Hamburger";

export default class Guide extends React.Component {
    constructor(props){
        super(props);
        this.collectMedias();
        const isMobile = !this.medias.includes("md");
        this.state = {
            sideMenuOpen: !isMobile,
            isMobile: isMobile
        };
    }

    collectMedias(){
        this.medias = [];
        for(let k in MediaPoints) {
            if (window.matchMedia(`(min-width: ${MediaPoints[k]}px)`).matches) {
                this.medias.push(k);
            }
        }
    }

    handleWindowResize = e => {
        this.collectMedias();
        this.setState({
            isMobile: !this.medias.includes("md")
        });
    };

    componentDidMount(){
        window.addEventListener("resize", this.handleWindowResize);
    }

    componentWillUnmount(){
        window.removeEventListener("resize", this.handleWindowResize);
    }

    render(){
        const {isMobile} = this.state;

        return (
            <Container fluid={true} cls={'guide-main-container'}>
                <MainMenu fullSize={true}/>

                <Row>
                    <Cell cls={'cell-md-8 cell-lg-9 order-2 order-md-1'}>
                        <article>
                            <Switch>
                                <Route exact path='/guide/' component={GuideIntro}/>
                                <Route path='/guide/common' component={GuideCommon}/>
                                <Route path='/guide/colors' component={GuideColorStyles}/>
                                <Route path='/guide/grid' component={GuideGrid}/>
                                <Route path='/guide/table' component={GuideTable}/>
                                <Route path='/guide/memory-table' component={GuideMemoryTable}/>
                                <Route path='/guide/push-button' component={GuidePushButton}/>
                                <Route path='/guide/split-button' component={GuideSplitButton}/>
                                <Route path='/guide/tool-button' component={GuideToolButton}/>
                                <Route path='/guide/command-button' component={GuideCommandButton}/>
                                <Route path='/guide/info-button' component={GuideInfoButton}/>
                                <Route path='/guide/image-button' component={GuideImageButton}/>
                                <Route path='/guide/action-button' component={GuideActionButton}/>
                                <Route path='/guide/shortcut' component={GuideShortcut}/>
                                <Route path='/guide/pagination' component={GuidePagination}/>
                                <Route path='/guide/breadcrumbs' component={GuideBreadcrumbs}/>
                                <Route path='/guide/hamburger' component={GuideHamburger}/>

                                <Route component={NotFound} />
                            </Switch>
                        </article>
                    </Cell>
                    <Cell cls={'cell-md-4 cell-lg-3 order-1 order-md-2'} id={'side-nav'}>
                        <SideMenu isMobile={isMobile}/>
                    </Cell>
                </Row>
            </Container>
        )
    }
}