import React, { Component } from 'react';

import './search-panel.css'

export default class SearchPanel extends Component {
    constructor(props){
        super(props);
        this.state ={
            searchText: ''
        }
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }
    onUpdateSearch(e){
        const value = e.target.value;
        this.setState({
            searchText: value
        })
        this.props.updateSearch(value);
    }
    render(){
        return (
            <input
                className="form-control search-input"
                type="text"
                placeholder="Search.."
                onChange = {this.onUpdateSearch}
            />
        )
    }
}

