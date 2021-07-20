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
        setUserInput(userInput = event.target.value)
    }


    
    const getSpecificVideo = async () => {
        const getSpecificVideo = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${userInput}&key=${apiKey}&part=snippet`)
        console.log("video id of:",getSpecificVideo.data )
        setVideoObject(getSpecificVideo.data)
        console.log(getSpecificVideo.data)
        setVideoId(getSpecificVideo.data.items[0].id.videoId)
        console.log("getSpecificVideo sets id of:",getSpecificVideo.data.items[0].id.videoId )
        console.log(videoId)
        setVideoTitle(getSpecificVideo.data.items[0].snippet.title)
        console.log(videoTitle,"snippet title")
        setVideoDescription(getSpecificVideo.data.items[0].snippet.description)
        console.log(videoDescription,"snippet description")
        

    }
    function handleSubmit(event){
        event.preventDefault();
        getSpecificVideo();

    }

    const getRelatedVideo = async () => {
        const getRelatedVideo = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&&key=${apiKey}&part=snippet`)
       // console.log("getrelatedvideo",getRelatedVideo.data)
        setVideoObject(getRelatedVideo.data)
        console.log(getRelatedVideo.data,"getrelatedvideo")
      
        //console.log("getrelatedvideo1",getRelatedVideo.data)
        //setVideoId(getRelatedVideo.data.items[0].id.videoId)
        //console.log("getrelatedvideo",getRelatedVideo.data)
        //https://www.googleapis.com/youtube/v3/search?relatedToVideoId={VIDEO ID HERE}&type=video&key={API KEY HERE}
    }


    function getVideoId (Id){
        getRelatedVideo(Id)
        setVideoId(Id)
        console.log(videoObject)
        //getComment(Id)
        //setVideoTitle(getRelatedVideo.data.items[0].snippet.title)
       // setVideoDescription(getRelatedVideo.data.items[0].snippet.description)
    }
    // const getComment = async (Id) => {
    //     const comment = await axios.get(`http://localhost:5001/api/collections/comments/videos/${Id}`)
    //     console.log("get commet was called", comment)


    //     //implement getComment into getRelatedVideo and getSpecificVideo add a map function to map through list of comments
    //     //implement getReply into getRelatedVideo and getSpecificVideo add a map function to map through list of replies
    //    // console.log('videoIdforgetcomment', videoId)
    //     //console.log('this is getComment',getcomment.data)
    // }
    //adds new comment to specific video
    // const addComment = async () => {
    //    // const addComments = await axios.post(`http://localhost:5000/api/collections/comments`)
  
    // }
    // //adds new reply to specific comment on video
    // const addReply = async () => {
    //   //  const addReplys = await axios.post(`http://localhost:5000/api/collections/comments'commentIDHERE'}/replies}`)
    // }

    // //updates likes on specific comment
    // const addLike = async () => {
    //   //  const addLikes = await axios.put(`http://localhost:500/api/collections/comments/'commentIDHERE'/likes`)
    // }


    // //updates dislikes on specific comment
    // const addDislike = async () => {
    //    // const addDislikes = await axios.put(`http://localhost:500/api/collections/comments/'commentIDHERE'/dislikes`)
    // }
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