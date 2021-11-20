import React, { Component } from 'react'

 
export class PropsClass extends Component {
    constructor() {
        super();
    }
 
    // when component completely done : Birth, use: Api
    componentDidMount() {
        console.warn("PropsClass.js, props val ready : ",this.props);
    }
 
    // when component will Update : Growth,
    componentDidUpdate() {
        console.warn("PropsClass.js, props val updated : ",this.props);
    }
 
    render() {
        return (
            <div>
                <h2>Props Class</h2>
                <h4>Name : {this.props.studentname}</h4>
                <h4>Class : {this.props.studentclass}</h4>
            </div>
        )
    }
}
 
export default PropsClass
