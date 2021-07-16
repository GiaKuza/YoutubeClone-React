import React from 'react';
import './VideoDescription.css';

//this will be pulled from youtube api and accessed with props. Just add div for container for description/title
const VideoDescription= (props) => {

    //add conditional rendering 
  console.log(props.videoTitle)
  console.log(props.videoDescription)
    return(
        <div>
            <h5></h5>
        </div>
    );
}

export default VideoDescription;