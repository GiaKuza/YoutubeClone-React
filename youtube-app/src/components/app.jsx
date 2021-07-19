import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NavBar from './navbar/NavBar';
import VideoPlayer from './videoPlayer/VideoPlayer';
import RelatedVideos from './relatedVideos/RelatedVideos';
import VideoDescription from './videoDescription/VideoDescription';
import Comments from './comments/Comments';
import './app.css';
import apiKey from '../keys'

const AppHooks = () => {
    let [videoId, setVideoId] = useState("7lCDEYXw3mM");
    
    let [userInput, setUserInput] = useState({});
    
    let [videoObject, setVideoObject] = useState({});

    let [videoTitle, setVideoTitle]= useState();

    let [videoDescription, setVideoDescription]= useState();


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
        console.log("getRelated ID",getRelatedVideo.data)
        //console.log("getrelatedvideo1",getRelatedVideo.data)
        //setVideoId(getRelatedVideo.data.items[0].id.videoId)
        //console.log("getrelatedvideo",getRelatedVideo.data)
        //https://www.googleapis.com/youtube/v3/search?relatedToVideoId={VIDEO ID HERE}&type=video&key={API KEY HERE}
    }


    function getVideoId (Id){
        getRelatedVideo(Id)
        setVideoId(Id)
        getComment(Id)
        //setVideoTitle(getRelatedVideo.data.items[0].snippet.title)
       // setVideoDescription(getRelatedVideo.data.items[0].snippet.description)
    }

    const getComment = async () => {
        console.log('videoIdforgetcomment', videoId)
        const getcomment = await axios.get(`http://localhost:5000/api/collections/comments/videos/${videoId}`)
        //implement getComment into getRelatedVideo and getSpecificVideo add a map function to map through list of comments
        //implement getReply into getRelatedVideo and getSpecificVideo add a map function to map through list of replies
        console.log('this is getComment',getcomment.data)
    }
    //adds new comment to specific video
    const addComment = async () => {
        const addComments = await axios.post(`http://localhost:5000/api/collections/comments`)

    }
    //adds new reply to specific comment on video
    const addReply = async () => {
<<<<<<< HEAD
       // const addReplys = await axios.post(`http://localhost:5000/api/collections/comments${commentIDHERE}/replies}`)
=======
        const addReplys = await axios.post(`http://localhost:5000/api/collections/comments'commentIDHERE'}/replies}`)
>>>>>>> 9929fcd8ff3b9d0f0564a835b3ca624c1012f13e
    }

    //updates likes on specific comment
    const addLike = async () => {
<<<<<<< HEAD
        //const addLikes = await axios.put(`http://localhost:500/api/collections/comments/${commentIDHERE}/likes`)
=======
        const addLikes = await axios.put(`http://localhost:500/api/collections/comments/'commentIDHERE'/likes`)
>>>>>>> 9929fcd8ff3b9d0f0564a835b3ca624c1012f13e
    }


    //updates dislikes on specific comment
    const addDislike = async () => {
<<<<<<< HEAD
       // const addDislikes = await axios.put(`http://localhost:500/api/collections/comments/${commentIDHERE}/dislikes`)
=======
        const addDislikes = await axios.put(`http://localhost:500/api/collections/comments/'commentIDHERE'/dislikes`)
>>>>>>> 9929fcd8ff3b9d0f0564a835b3ca624c1012f13e
    }
return(
    <div className="app-div">
        <NavBar handleChange={handleChange} handleSubmit={handleSubmit}/>
		<VideoPlayer videoId = {videoId}/>
        <RelatedVideos videoObject = {videoObject} getVideoId = {getVideoId} setVideoTitle = {setVideoTitle} setVideoDescription={setVideoDescription} />
        <VideoDescription videoTitle ={videoTitle} videoDescription={videoDescription}/>
        <Comments videoId={videoId}/>
    </div>
)
}

export default AppHooks;