import React, { useEffect } from 'react';
import axios from 'axios';
import './NavBar.css';
import apiKey from '../../keys';

const  NavBar = (props) => {

const [collections, setCollection] = useState({});

//get useEffect() from props to be handle by the onChange and onSubmit events here
useEffect((userInput) => {
    axios.get(`https://www.googleapis.com/youtube/v3/search?q=${userInput}&key=${apiKey}`)
})

function onChange(event){
    console.log(event)
    return userInput 
}

function onSubmit(){
    let userInput = event.something;
    useEffect(userInput)
}



    return (
        <div>
            <nav className ="navbar navbar-light bg-light justify-content-between">
                <a className="navbar-brand">Youtube</a>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" 
                    type="search" 
                    placeholder="Search" 
                    aria-label="Search"
                    >
                    
                    </input>
                    <button className="btn btn-outline-success my-2 my-sm-0" 
                    type="submit"
                    onSubmit={onSubmit}>Search</button>
                </form>
            </nav>
        </div>
    );
}

export default NavBar;