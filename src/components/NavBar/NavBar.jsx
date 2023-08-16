import { Link } from 'react-router-dom';
import {useState} from 'react';

export default function NavBar({user}) {

    
    return (
        <>
            <h3>Welcome {user}!</h3>
            <nav>
                <Link to="/">Movies List</Link>
                &nbsp; | &nbsp;
                <Link to="/actors">Actor List</Link>
            </nav>
            <br></br>
        </>
    )
}