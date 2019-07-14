import React from "react";

export default class ActivityRing extends React.Component {
    createItems = () => {
        let items = [];
        for(let i = 0; i < 5; i++)
            items.push(
                <div className="wrap" key={i}>
                    <div className="circle" />
                </div>
            );
        return items;
    };

    render(){
        return this.createItems();
    }
}