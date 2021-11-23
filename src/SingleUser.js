import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
 

function SingleUser(props) {
    let { id } = useParams();
    const navigate = useNavigate();


    return (
        <div>
         

           <div className="col-md-5 mx-auto">
           <button onClick={() => navigate('/apiuser')} className="btn btn-warning mb-4">Go Back</button>
           <h3>Single User</h3>
            <hr />
           <table class="table mt-5">
                <tbody>

                    {
                        props.data.filter(item => id == item.id).map((item, i) =>
                            <>
                                <tr>
                                    <th scope="row" width="150">Id</th>
                                    <td>{item.id}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Image</th>
                                    <td><img src={item.avatar_url} width="300" /></td>
                                </tr>
                                <tr>
                                    <th scope="row">Website URL</th>
                                    <td>{item.html_url}</td>
                                </tr>

                            </>
                        )
                    }

                </tbody>
            </table>
           </div>

        </div>
    )
}

export default SingleUser;

// export default withRouter(SingleUser);

