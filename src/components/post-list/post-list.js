import React from 'react';

import PostListItem from '../post-list-item';
import './post-list.css';

export default function PostList(props) {

    const { posts, onDelete, onToggleImportant, onToggleLiked } = props;
    const elements = posts.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li id={id} className="list-group-item">
                <PostListItem {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)}
                />
            </li>
        )

    });
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}
