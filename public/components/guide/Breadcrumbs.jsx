import React from "react";
import {Adsense, Breadcrumbs, BreadcrumbsItem, Cell, Table} from "../../../src";
import PrismCode from "../PrismCode";
import Example from "../Example";
import {tablePropsHeader} from "../Defs";
import Article from "../Article";
import GuideLogo from "../GuideLogo";

export default class GuideBreadcrumbs extends React.Component {
    render(){
        const codeImport = `import {Breadcrumbs, BreadcrumbsItem} from "metro4-react";`;
        const codeUsing = `
            <Breadcrumbs>
                <BreadcrumbsItem href="/home">Home</BreadcrumbsItem>
                <BreadcrumbsItem href="/products">Products</BreadcrumbsItem>
                <BreadcrumbsItem href="download">Download</BreadcrumbsItem>
                <BreadcrumbsItem>Windows 10</BreadcrumbsItem>
            </Breadcrumbs>
        `;

        const codeItemStructure = `
            <li className={classItem}>
                <a className={classLink} {...rest}>
                    {this.props.children}
                </a>
            </li>        
        `;

        const tablePropsBody = [
            ["cls", "null", "Additional classes for component"],
            ["className", "null", "Additional classes for component"],
            ["clsItem", "null", "Additional classes for page item"],
            ["clsLink", "null", "Additional classes for page link"],
        ];
        const tablePropsBodyItem = [
            ["cls", "null", "Additional classes for component"],
            ["className", "null", "Additional classes for component"],
            ["clsItem", "null", "Additional classes for page item"],
            ["clsLink", "null", "Additional classes for page link"],
        ];

        return(
            <Article>
                <GuideLogo/>
                <h1>Breadcrumbs</h1>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>

                <h3>Introduction</h3>
                <Example>
                    <Breadcrumbs>
                        <BreadcrumbsItem>Home</BreadcrumbsItem>
                        <BreadcrumbsItem>Products</BreadcrumbsItem>
                        <BreadcrumbsItem>Download</BreadcrumbsItem>
                        <BreadcrumbsItem>Windows 10</BreadcrumbsItem>
                    </Breadcrumbs>
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
                <h4>Item Props</h4>
                <Table className="table-border cell-border" head={tablePropsHeader} body={tablePropsBodyItem}/>
                <p>
                    In additional, you can use all valid props for <code>&lt;a&gt;</code> - such as <code>href</code>, <code>target</code>, etc.
                </p>

                <br/>
                <h4>Item structure</h4>
                <PrismCode language="js" code={codeItemStructure}/>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>
            </Article>
        )
    }
}