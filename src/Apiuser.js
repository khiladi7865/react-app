
import React, { useEffect, useState } from 'react'
import useFetch from "react-fetch-hook";

export default function Apiuser(props) {

    useEffect(() => {
        console.log("Check prop data:", props.data);
    });

    
    return (
        <div>
            <h2 className="mt-2">API Users component hhh</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Email</th>
                        <th scope="col">Content</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((item, index) =>
                        
                            <tr>
                                <td key={index}>{item.id}</td>
                                <td key={index}>{item.name}</td>
                                <td key={index}>{item.email}</td>
                                <td key={index}>{item.body}</td>
                            </tr>           
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
