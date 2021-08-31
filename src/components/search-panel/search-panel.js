import React, { useState, useEffect } from 'react';

import './search-panel.css'

export default function SearchPanel({ updateSearch }) {
    const [searchText, setSearchText] = useState('');

    function onUpdateSearch(e) {
        const value = e.target.value;
        setSearchText(value)
    }
    useEffect(() => {
        updateSearch(searchText);
    })

    return (
        <input
            className="form-control search-input"
            type="text"
            placeholder="Search.."
            onChange={(e) => { onUpdateSearch(e) }}
        />
    )
}

