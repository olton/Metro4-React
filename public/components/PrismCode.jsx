import React from "react"
import Prism from "prismjs"

export default class PrismCode extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.highlight = this.highlight.bind(this);
        this.cleanCode = this.cleanCode.bind(this);
    }

    componentDidMount() {
        this.highlight();
    }

    componentDidUpdate() {
        this.highlight()
    }

    highlight(){
        if (this.ref && this.ref.current) {
            Prism.highlightElement(this.ref.current)
        }
    };

    cleanCode(code){
        const txt = code
            .replace(/^[\r\n]+/, "")	// strip leading newline
            .replace(/\s+$/g, "");

        if (/^\S/gm.test(txt)) {
            return txt;
        }

        let mat, str, re = /^[\t ]+/gm, len, min = 1e3;

        while (mat = re.exec(txt)) {
            len = mat[0].length;

            if (len < min) {
                min = len;
                str = mat[0];
            }
        }

        if (min === 1e3)
            return;

        return  txt.replace(new RegExp("^" + str, 'gm'), "");
    };

    render() {
        const { plugins, language, children } = this.props;
        const code = this.cleanCode(this.props.code);
        return (
            <pre className={!plugins ? "" : plugins.join(" ")}>
                <code ref={this.ref} className={`language-${language}`}>
                  {this.props.code ? code : children}
                </code>
            </pre>
        )
    }
}