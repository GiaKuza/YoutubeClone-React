import React, {useState, useEffect} from 'react';
import axios from 'axios';

import NavBar from './navbar/NavBar';
import VideoPlayer from './videoPlayer/VideoPlayer';
import RelatedVideos from './relatedVideos/RelatedVideos';
import VideoDescription from './videoDescription/VideoDescription';
import './app.css';
import apiKey from '../keys'

const AppHooks = () => {
    let [videoId, setVideoId] = useState("7lCDEYXw3mM");
    
    let [userInput, setUserInput] = useState({});
    
    let [videoObject, setVideoObject] = useState({});

    let [videoTitle, setVideoTitle]= useState({});

    let [videoDescription, setVideoDescription]= useState({});


    function handleChange(event){
        //console.log(event)
        
    
        setUserInput(userInput = event.target.value)
        //console.log(userInput)
        //console.log(event.target.name);
    }
    const getSpecificVideo = async () => {
        const getSpecificVideo = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${userInput}&key=${apiKey}&part=snippet`)
        console.log(getSpecificVideo.data)
        setVideoObject(getSpecificVideo.data)
        setVideoId(getSpecificVideo.data.items[0].id.videoId)
        //console.log("getSpecificVideo sets id of:",getSpecificVideo.data.items[0].id.videoId )
        console.log("getSPECIFI",getSpecificVideo)
        setVideoTitle(getSpecificVideo.data.items[0].snippet.title)
        setVideoDescription(getSpecificVideo.data.items[0].snippet.description)
        
    }
    function handleSubmit(event){
        event.preventDefault();
        //console.log(userInput)
        getSpecificVideo();

    }

    const getRelatedVideo = async () => {
        //console.log("setvideobject just ran")
        const getRelatedVideo = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&&key=${apiKey}&part=snippet`)
        
        console.log("getrelatedvideo",getRelatedVideo.data)
        setVideoObject(getRelatedVideo.data)
        
        //console.log("getrelatedvideo1",getRelatedVideo.data)
        //setVideoId(getRelatedVideo.data.items[0].id.videoId)
        //console.log("getrelatedvideo",getRelatedVideo.data)
        //https://www.googleapis.com/youtube/v3/search?relatedToVideoId={VIDEO ID HERE}&type=video&key={API KEY HERE}
    }


    function getVideoId (Id){
        getRelatedVideo(Id)
        setVideoId(Id)
        setVideoTitle(getRelatedVideo.data.items[0].snippet.title)
        setVideoDescription(getRelatedVideo.data.items[0].snippet.description)
    }

return(
    <div className="app-div">
        <NavBar handleChange={handleChange} handleSubmit={handleSubmit}/>
		<VideoPlayer videoId = {videoId}/>
        <RelatedVideos videoObject = {videoObject} getVideoId = {getVideoId} />
        <VideoDescription videoTitle ={videoTitle} videoDescription={videoDescription}/>
       
    </div>
)
}

export default AppHooks;