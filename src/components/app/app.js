import React, { useState } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css';

export default function App() {

    const [data, setData] = useState([
        { label: 'Going to learn React', important: false, like: false, id: 1 },
        { label: 'Let`s start', important: false, like: false, id: 2 },
        { label: 'Find information', important: false, like: false, id: 3 },
        { label: 'Create first app', important: false, like: false, id: 4 },
    ]);
    const [searchText, setSearchText] = useState('');
    const [filter, setFilter] = useState('all');
    function deleteItem(id) {
        const index = data.findIndex(element => element.id === id);
        const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
        setData(newArr);
    }
    function addItem(text) {
        const newItem = {
            label: text,
            id: data.length + 1
        }
        const newArr = [...data, newItem];
        setData(newArr);
    }
    function onToggleImportant(id) {
        const index = data.findIndex(element => element.id === id);
        const old = data[index];
        const newItem = { ...old, important: !old.important }
        const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
        setData(newArr);

    }
    function onToggleLiked(id) {
        const index = data.findIndex(element => element.id === id);
        const old = data[index];
        const newItem = { ...old, like: !old.like }
        const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
        setData(newArr);

    }
    function searchPosts(items, searchText) {
        if (searchText.length === 0) {
            return items;
        } else {
            return items.filter((item) => {
                return item.label.indexOf(searchText) > -1
            });
        }

    }
    function updateSearch(value) {
        setSearchText(value);
    }
    function filterPosts(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like);
        } else {
            return items;
        }
    }
    function onFilterChange(filter) {
        setFilter(filter);
    }
    const liked = data.filter(item => item.like).length;
    const allPosts = data.length;
    const visiblePosts = filterPosts(searchPosts(data, searchText), filter);
    return (
        <div className="app">
            <AppHeader
                liked={liked}
                allPosts={allPosts}
            />
            <div className="search-panel d-flex">
                <SearchPanel
                    updateSearch={(value) => updateSearch(value)}
                />
                <PostStatusFilter
                    filter={filter}
                    onFilterChange={(filterValue) => onFilterChange(filterValue)}
                />
            </div>
            <PostList posts={visiblePosts}
                onDelete={(id) => deleteItem(id)}
                onToggleImportant={(id) => onToggleImportant(id)}
                onToggleLiked={(id) => onToggleLiked(id)} />
            <PostAddForm
                onAdd={(text) => addItem(text)} />
        </div>
    )

}