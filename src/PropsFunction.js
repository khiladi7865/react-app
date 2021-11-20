
import React, { Component, useEffect } from 'react'

function PropsArea(props) {
 
    useEffect(() => {
        console.warn("PropsFunction.js, props val ready : ", { props });
    });
 
   // on update
    useEffect(() => {
        console.warn("PropsFunction.js, props val update : ", { props });
    }, []);
 
    return (
        <div>
            <h2>Props Function</h2>
            <h4>Name : {props.studentname}</h4>
            <h4>Class : {props.studentclass}</h4>
        </div>
    )
}
export default PropsArea