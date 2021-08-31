import React, { useState } from 'react';

import './post-add-form.css'

export default function PostAddForm(props) {

    const [text, setText] = useState('');
    const { onAdd } = props;
    function onValueChange(e) {
        setText(e.target.value)
    }
    function onSubmit(e) {
        e.preventDefault();
        if (text === '') {
            console.log('Empty post!')
        } else {
            onAdd(text);
            setText('');
        }

    }

    return (
        <form className="bottom-panel d-flex"
            onSubmit={(e) => onSubmit(e)} >
            <input
                type="text"
                placeholder="What are you thinking about now?"
                className="form-control new-post-label"
                onChange={(e) => onValueChange(e)}
                value={text}
            />
            <button
                type="submit"
                className="btn btn-outline-secondary"
            >Add</button>
        </form>
    )

}
