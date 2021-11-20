
import React,{useState} from 'react'

export default function Events() {
    const [statename, setstatename] = useState('New Delhi');
 
    function changeState(e) {
        console.warn('get val = ', e.target.value);
        setstatename(e.target.value);
     }
    return (
        <div>
            <h2>Events</h2>
            <button className="btn btn-secondary mr-2 mb-2" onClick={() => { alert('hi') }}>onClick</button>
            <hr />
            <form>       
                <div className="form-group">
                    <input type="text" className="form-control" placeholder={statename} onChange={changeState}/>
                    <span className="mt-2 d-block">Value : {statename}</span>
                </div>
                <button className="btn btn-primary" type="button" onClick={()=>{alert(statename)}}>Submit</button>
            </form>
        </div>
    )
}

