import React from "react";

export default class ActivityMetro extends React.Component {
    createItems = () => {
        let items = [];
        for(let i = 0; i < 5; i++)
            items.push(
                <div className="circle" key={i} />
            );
        return items;
    };

    render(){
        return this.createItems();
    }
}