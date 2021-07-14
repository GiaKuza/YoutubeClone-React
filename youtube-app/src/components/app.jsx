import React, {useState, useEffect} from 'react';
import axios from 'axios';

import NavBar from './navbar/NavBar';
import VideoPlayer from './videoPlayer/VideoPlayer';
import relatedVideos from './relatedVideos/RelatedVideos';

const AppHooks = () => {
    let [videoId, setVideoId] = useState("7lCDEYXw3mM"); // default video Ask JJ about this line if using let in this case would be okay.
    
    let [userInput, setUserInput] = useState({});
    
    function handleChange(event){
        console.log(event)
        
    
        setUserInput(userInput = event.target.value)
        console.log(userInput)
        console.log(event.target.name);
        
    }
    const getSpecificVideo = async () => {
        const getSpecificVideo = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${userInput}&key=AIzaSyBhPLRasz7YJgy2wZgyy_Wtcf4EpgBWtmU`)
        setVideoId(videoId = getSpecificVideo.data.items[0].id.videoId)
        console.log(videoId)
    }
    function handleSubmit(event){
        event.preventDefault();
        console.log(userInput)
        getSpecificVideo();

    }
return(
    <div>
        <NavBar handleChange={handleChange} handleSubmit={handleSubmit}/>
		<VideoPlayer videoId = {videoId}/>
        <relatedVideos/>
    </div>
)
}

export default AppHooks;