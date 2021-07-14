import React, {useState, useEffect} from 'react';
import axios from 'axios';

import NavBar from './navbar/NavBar';
import VideoPlayer from './videoPlayer/VideoPlayer';
import RelatedVideos from './relatedVideos/RelatedVideos';
import './app.css';

const AppHooks = () => {
    let [videoId, setVideoId] = useState("7lCDEYXw3mM");
    
    let [userInput, setUserInput] = useState({});
    
    let [videoObject, setVideoObject] = useState({});
    function handleChange(event){
        console.log(event)
        
    
        setUserInput(userInput = event.target.value)
        console.log(userInput)
        console.log(event.target.name);
    }
    const getSpecificVideo = async () => {
        const getSpecificVideo = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${userInput}&key=AIzaSyBhPLRasz7YJgy2wZgyy_Wtcf4EpgBWtmU&part=snippet`)
        setVideoObject(getSpecificVideo.data)
        setVideoId(getSpecificVideo.data.items[0].id.videoId)
        console.log(getSpecificVideo)
    }
    function handleSubmit(event){
        event.preventDefault();
        console.log(userInput)
        getSpecificVideo();

    }
    function isLoaded(){
        let isLoaded = false;
        if(userInput.length === 0){
            isLoaded = false;
        }
        else{
            isLoaded = true;
        }
    }
return(
    <div className="app-div">
        <NavBar handleChange={handleChange} handleSubmit={handleSubmit}/>
		<VideoPlayer videoId = {videoId}/>
        <RelatedVideos videoObject = {videoObject}/>
       
    </div>
)
}

export default AppHooks;