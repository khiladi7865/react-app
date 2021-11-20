import React, { useState } from 'react';

export default function Createuser() {
    const [name, nameUpdate] = useState("");
    const [age, ageUpdate] = useState("");
    const [address, addressUpdate] = useState("");

    function SubmitFun(params) {
        let datafrm = {name, age, address}
        console.warn('Form data : ', datafrm);
    }

    return (
        <div>
            <h2>Create User : Forms</h2>

            <div className="form-group">
                <input type="text" className="form-control" placeholder="Name" value={name} onChange={(e)=>nameUpdate(e.target.value)}/>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Age" value={age} onChange={(e)=>ageUpdate(e.target.value)}/>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Address" value={address} onChange={(e)=>addressUpdate(e.target.value)}/>
            </div>
            <button className="btn btn-primary" type="button" onClick={SubmitFun}>Create User</button>
        </div>
    )
}

// Result - Form data :  {name: 'bvbv', age: '44', address: '555'}
