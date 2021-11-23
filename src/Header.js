import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contactus from './Contactus';
import PropsFunction from './PropsFunction';
import PropsClass from './PropsClass';
import Events from './Events';
import Condition from './Condition';
import Users from './Users';
import Createuser from './Createuser';
import Pageerror from './Pageerror';
import Apiuser from './Apiuser';
import SingleUser from './SingleUser';

export default function Header() {

    const [userfirst, setuserfirst] = useState([]);
    const [loadapi, setLoadapi] = useState(false);

    useEffect(() => {
        fetch('https://api.github.com/users').then((data) => {
            data.json().then((result) => {
                setuserfirst(result);
                setLoadapi(true);
            });
        });
    }, []);


    return (
        <>


            <Router>

                <nav>
                    <ul className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link to="/users">Users</Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link to="/createusers">Create User</Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link to="/contact">Contact Us</Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link to="/apiuser">Api User</Link>
                        </li>
                    </ul>
                </nav>


                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/createusers" element={<Createuser />} />
                    <Route path="/contact" element={<Contactus />} />
                    <Route path="/singleUser/:id" element={<SingleUser data={userfirst} loadapistatus={loadapi} />} />
                    <Route path="/apiuser" element={<Apiuser data={userfirst} loadapistatus={loadapi} />} />
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Pageerror />} />
                </Routes>

            </Router>


        </>
    )
}
