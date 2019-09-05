import React from "react";

const Example = ({cls = "", className = "", children, ...rest}) => {
    return (
        <div className={`example ${cls} ${className}`} {...rest}>
            {children}
        </div>
    )
};

export default Example;