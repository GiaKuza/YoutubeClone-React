import React from 'react';
import './VideoDescription.css';

//this will be pulled from youtube api and accessed with props. Just add div for container for description/title
const VideoDescription= (props) => {
    //add cond"itional rendering 
  console.log("videoTitle:",props.videoTitle)
  console.log("videoDescription", props.videoDescription)
    return(
        <>
        {props.videoTitle ? 
        <div className='title'>
            <h5>Title:  {props.videoTitle}</h5>
            <h5>==============================================</h5>
            <h5>Description:  {props.videoDescription}</h5>
        </div>
        : <h1> Loading </h1>
        }
            
        </>
    );
}

export default VideoDescription;