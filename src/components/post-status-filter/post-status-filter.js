import React, { useState } from 'react';

import './post-status-filter.css'

export default function PostStatusFilter({ filter, onFilterChange }) {
    const [buttons] = useState([
        { name: 'all', label: 'All' },
        { name: 'like', label: 'Favorite' }
    ])

    const btns = buttons.map(({ name, label }) => {
        const active = filter === name;
        const activeButton = active ? 'btn-info' : 'btn-outline-secondary';
        return (
            <button key={name} type="button" className={`btn ${activeButton}`} onClick={() => onFilterChange(name)}>{label}</button>
        );
    })
    return (
        <div className="btn-group">
            {btns}
        </div>
    )

}
