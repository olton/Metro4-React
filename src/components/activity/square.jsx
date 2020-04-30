import React from "react";

export default class ActivitySquare extends React.Component {
    constructor(props) {
        super(props);
        this.createItems = this.createItems.bind(this);
    }

    createItems () {
        let items = [];
        for(let i = 0; i < 4; i++)
            items.push(
                <div className="square" key={i} />
            );
        return items;
    };

    render(){
        return this.createItems();
    }
}