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

    const getRelatedVideo = async (id) => {
        const getSpecificVideo = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${id}&type=video&&key=AIzaSyBhPLRasz7YJgy2wZgyy_Wtcf4EpgBWtmU&part=snippet`)
        setVideoObject(getSpecificVideo.data)
        setVideoId(getSpecificVideo.data.items[0].id.videoId)
        console.log(getSpecificVideo)

        //https://www.googleapis.com/youtube/v3/search?relatedToVideoId={VIDEO ID HERE}&type=video&key={API KEY HERE}
    }


    function getVideoId (Id){
        //setVideoId(Id)
        getRelatedVideo(Id)
    }

return(
    <div className="app-div">
        <NavBar handleChange={handleChange} handleSubmit={handleSubmit}/>
		<VideoPlayer videoId = {videoId}/>
        <RelatedVideos videoObject = {videoObject} getVideoId = {getVideoId} />
       
    </div>
)
}

export default AppHooks;