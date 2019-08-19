import React from "react";
import Input from "../../src/components/input/input";

export default class SearchForm extends React.Component {
    render(){
        return (
            <div className={'pl-0 pr-4 pt-4 pb-4'}>
                <Input search={true}/>
            </div>
        )
    }
}