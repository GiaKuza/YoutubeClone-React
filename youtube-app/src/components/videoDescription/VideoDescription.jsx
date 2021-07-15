import React from 'react';
import './VideoDescription.css';

//this will be pulled from youtube api and accessed with props. Just add div for container for description/title
const VideoDescription= (props) => {

    //add conditional rendering 
  console.log(props.videoTitle)
  console.log(props.videoDescription)
    return(
        <>
        
            {props.videoTitle  ? 
            
            <div class="card-container" style={{width:'18rem'}}>
            <h2>{props.videoTitle}</h2>
            <h2>{props.videoDescription}</h2>
            </div>
            : <h1></h1>
            }

        </>
    );
}

export default VideoDescription;