import React from "react";
import Input from "../../src/components/input/input";

export default class SearchForm extends React.Component {
    render(){
        return (
            <div className={'pl-4 pr-4 pt-2'}>
                <Input search={true}/>
            </div>
        )
    }
}