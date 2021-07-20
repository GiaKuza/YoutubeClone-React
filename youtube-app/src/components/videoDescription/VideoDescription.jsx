import React from 'react';
import './VideoDescription.css';

//this will be pulled from youtube api and accessed with props. Just add div for container for description/title
const VideoDescription= (props) => {
    console.log(props.videoTitle)
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