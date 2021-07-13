import React, { useEffect } from 'react';
import axios from 'axios';
import './NavBar.css';


const  NavBar = (props) => {





    return (
        <div>
            <nav className ="navbar navbar-light bg-light justify-content-between">
                <a className="navbar-brand">Youtube</a>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" 
                    type="search" 
                    placeholder="Search For a Video!" 
                    aria-label="Search"
                    >
                    </input>
                    <button className="btn btn-outline-success my-2 my-sm-0" 
                    >Search</button>
                </form>
            </nav>
        </div>
    );
}

export default NavBar;