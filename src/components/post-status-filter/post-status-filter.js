import React, { Component } from 'react';

import './post-status-filter.css'

export default class PostStatusFilter extends Component {
    constructor(props){
        super(props);
        this.buttons = [
            {name:'all', label: 'All'},
            {name:'like', label:'Favorite'}
        ]

    }
    render(){
        const buttons = this.buttons.map(({name, label})=>{
            const {filter, onFilterChange} = this.props;
            const active = filter ===name;
            const activeButton = active ? 'btn-info':'btn-outline-secondary';
            return(
                <button key={name} type="button" className={`btn ${activeButton}`} onClick ={()=>onFilterChange(name)}>{label}</button>
            );
        })
        return (
            <div className="btn-group">
               {buttons}
            </div>
        )
    }
}