import React from 'react';
import './VideoDescription.css';

//this will be pulled from youtube api and accessed with props. Just add div for container for description/title
const VideoDescription= (props) => {
    //add cond"itional rendering 
  console.log("videoTitle:",props.videoTitle)
  console.log("videoDescription", props.videoDescription)

    return(
        <div className='video-info'>
        <h5 className="video-title"> video title</h5>
        <h5 className="video-description">video Description</h5>
        </div>
        
    );
}

export default VideoDescription;