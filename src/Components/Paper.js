import React from 'react'
import Header from '../Components/Header';
import { Link } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css"
import "./paper.css"
export default function Paper({state}) {

return <div className="jack">
    <div id="paper" >
    <h1>About our Paper</h1>
    <ul className="container">
        <li>Paper Used</li>
    </ul>
        <Link to="/" style={{margin: "20px"}}><button>Back</button></Link>
        <ul>
            <h1>Hello</h1>
        </ul>
   
    </div>
    </div>
}


