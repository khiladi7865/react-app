
import React, { Component } from 'react'

export class About extends Component {

    // load this firstly or before component load, use: var
    constructor() {
        super();
        
        this.state = {
            name : 'diptanshu',
            age : '25',
            color : 'brown'
        }
    }

    // when component completely done : Birth, use: Api
    componentDidMount() {
        console.warn('componentDidMount 2');
    }
  
    // when component will Update : Growth
    componentDidUpdate() {
        alert('Value is changed');
    }

    render() {
        return (
            <div>
                <h2 style={{color: this.state.color}}>About us Component</h2>
                <h3>Name : {this.state.name} , Age : {this.state.age}</h3>
                <button onClick={()=>{ this.setState({name:'www', age:28, color : 'blue'})  }}>Click to update</button>
            </div>
        )
    }
}

export default About


