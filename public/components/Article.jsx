import React from "react";

const Article = ({cls = "", className = "", children, ...rest}) => {
    return (
        <article className={`${cls} ${className}`} {...rest}>
            {children}
        </article>
    )
};

export default Article;