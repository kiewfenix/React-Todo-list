import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css';

export default class App extends Component{
    constructor (props){
        super(props);
        this.state= {
            data : [
                {label:'Going to learn React',important:false, like: false, id :1},
                {label:'Let`s start',important:false, like: false, id:2},
                {label:'React is better than JS',important:false, like: false, id:3},
                {label:'React is the best',important:false, like: false, id:4},
            ],
            searchText: '',
            filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
        this.onFilterChange = this.onFilterChange.bind(this);
    }
    deleteItem(id){
        this.setState(({data})=>{
            const index = data.findIndex (element => element.id === id);
            const newArr = [...data.slice(0, index),...data.slice(index+1)];
            return{
                data: newArr
            }
        })
    }
    addItem(text){
        const newItem = {
            label: text,
            id: this.state.data.length + 1
        }
        this.setState(({data})=>{
          
            const newArr = [...data, newItem];
            return{
                data: newArr
            }
        })

    }
    onToggleImportant(id){
        this.setState(({data})=>{
            const index = data.findIndex (element => element.id === id);
            const old = data[index];
            const newItem = {...old, important: !old.important}
            const newArr = [...data.slice(0, index),newItem,...data.slice(index+1)];
            return{
                data: newArr
            }
        });
    }
    onToggleLiked(id){
        this.setState(({data})=>{
            const index = data.findIndex (element => element.id === id);
            const old = data[index];
            const newItem = {...old, like: !old.like}
            const newArr = [...data.slice(0, index),newItem,...data.slice(index+1)];
            return{
                data: newArr
            }
        });
    }
    searchPosts(items, searchText){
        if (searchText.length ===0){
            return items;
        }else{
            return items.filter((item)=>{
                return item.label.indexOf(searchText)>-1
            });
        }

    }
    updateSearch(value){
        this.setState({
            searchText: value
        })
    }
    filterPosts(items, filter){
        if (filter ==='like'){
            return items.filter(item=>item.like);
        }else {
            return items;
        }
    }
    onFilterChange(filter){
        this.setState({filter})
    }
    render(){
        const {data, searchText,filter} = this.state;
        const liked = data.filter(item=> item.like).length;
        const allPosts =data.length;
        const visiblePosts = this.filterPosts(this.searchPosts(data, searchText),filter);
        return (
            <div className="app">
                 <AppHeader
                 liked = {liked}
                 allPosts = {allPosts}
                 />
                 <div className="search-panel d-flex">
                     <SearchPanel
                     updateSearch= {this.updateSearch}
                     />
                     <PostStatusFilter
                     filter = {filter}
                     onFilterChange = {this.onFilterChange}
                     />
                 </div>
                 <PostList posts = {visiblePosts}
                 onDelete = {this.deleteItem}
                 onToggleImportant={this.onToggleImportant}
                 onToggleLiked = {this.onToggleLiked}/>
                 <PostAddForm
                 onAdd = {this.addItem}/>
            </div>
        )
    }
}