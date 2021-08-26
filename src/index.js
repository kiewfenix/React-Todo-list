import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/';

/* class Who extends Component{
    constructor(props){
        super(props);
        this.state = {
            years: 26
        }
        this.nextYear = this.nextYear.bind(this);
    }
    nextYear(){
        this.setState( state => ({years:++state.years})
        )
    }
    render(){
        return (
            <>
                <button onClick = {this.nextYear}>++</button>
                <h1> My name is {this.props.name}, i`m {this.state.years} old</h1>
            </>
        )
    }
} 
ReactDOM.render(<Who name= "Vasyl"/>, document.getElementById('root'));
*/
ReactDOM.render(<App/>, document.getElementById('root'));
