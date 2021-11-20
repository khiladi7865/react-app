
//========================= Hooks ============================

import React, { useEffect, useState } from 'react';

function Contactus() {
    const [name, updateName] = useState('Contact us page');
    const [menuActive, setMenuState] = useState(false);

    // by default
    // useEffect(()=>{
    //   console.log('value change');
    // });

    useEffect(() => {
      alert('Name change');

    },[wrapperFunction]);

    function wrapperFunction() {
        updateName('New Contact Section');
        setMenuState((menuActive) => !menuActive)
    }


    return (
        <div className="container">
            <h3>Text change, Toggle : color & class</h3>
            <h5 style={{ color: menuActive ? "#fff" : "#000" }} className={menuActive ? "bg-info p-4" : "bg-warning p-4"}>{name}</h5>
            <p>Color code : {menuActive ? "#fff" : "#000"}</p>
            
            <button onClick={wrapperFunction} className="btn btn-outline-secondary">change name</button>
        </div>
    )
}

export default Contactus;
