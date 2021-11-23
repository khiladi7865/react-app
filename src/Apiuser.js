
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

export default function Apiuser(props) {

    const loadStaus = props.loadapistatus;
    useEffect(() => {
        console.log("Showall Prop data[]:", loadStaus ? props : "Api loading...");
        console.log("Prop index[1]:", loadStaus ? props.data[2] : "Api loading...");
    });

    const [valuedelete, setValuedelete] = useState(false);

    // remove user
    function handleClick(id) {
        props.data.forEach((item, index) => {
            if (id === item.id) {
                props.data.splice(index, 1);
            }
        });
        setValuedelete((valuedelete) => !valuedelete);
    }


    return (
        loadStaus ?
            <div>


                <h2 className="mt-2 mb-4">API Users component</h2>

                <div className="row">
                    <div className="container-fluid">
                        <div className="row">

                            <div className="col-md-8">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col" width="30">Id</th>
                                            <th scope="col">Image</th>
                                            <th scope="col">Website</th>
                                            <th scope="col">Delete</th>
                                            <th scope="col" width="140">Url</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            props.data.map((item, i) =>

                                                <tr>
                                                    <td key={i}>{item.id}</td>
                                                    <td key={i}><img src={item.avatar_url} width="150" /></td>
                                                    <td key={i}>Website URL : {item.html_url}</td>
                                                    <td>
                                                        <button onClick={() => { handleClick(item.id) }} className="btn btn-danger d-flex" data-togupdate={valuedelete ? 'true' : 'false'}>
                                                            Delete
                                                        </button>
                                                    </td>
                                                    <td key={i}>
                                                        <Link to={'/singleUser/' + item.id} class="btn btn-success">Read more</Link>
                                                    </td>
                                                </tr>
                                            )
                                        }

                                    </tbody>
                                </table>
                            </div>

                            <div className="col-md-4">
                                <h5><u>Show Only index[4] data:-</u></h5>
                                <table class="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <th scope="row">Id</th>
                                            <td>{props.data[4].id}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Image</th>
                                            <td><img src={props.data[4].avatar_url} width="200" /></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Website URL</th>
                                            <td>{props.data[4].html_url}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            :
            <div className="text-center p-5 bg-dark">
                <div className="p-5 my-5">
                    <div className="spinner-border text-light my-5" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>


    )
}
