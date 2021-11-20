import React, { useState, Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel'


export default function Condition() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
        const [user, setUser] = useState([
        {
            "id": 1,
            "title": "accusamus beatae ad facilis cum similique qui sunt",
            "thumbnailUrl": "https://via.placeholder.com/150/92c952"
        },
        {
            "id": 2,
            "title": "reprehenderit est deserunt velit ipsam",
            "thumbnailUrl": "https://via.placeholder.com/150/771796"
        }
        ,
        {
            "id": 2,
            "title": "reprehenderit est deserunt velit ipsam",
            "thumbnailUrl": "https://via.placeholder.com/150/771796"
        }
    ]);
    return (
        <Fragment>
            <h3>Conditions</h3>
            <h3 className="badge badge-secondary bg-info font-weight-normal">User Length : {user.length}</h3>
            {
                user.length > 0 ?
                    <div className="alert alert-success">Data Available</div>
                    :
                    <div className="alert alert-danger">Empty</div>
            }

            <hr />
            <h3>Bootstrap with React js</h3>
  
        </Fragment>
    )
}
