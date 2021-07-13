import React from 'react';
import './VideoPlayer.css';

function VideoPlayer(props) {
    let videoId = props.videoId
    console.log(videoId);
    return (     
            <iframe id="ytplayer" type="text/html" width="640" height="360"
            src={`https://www.youtube.com/embed/${props.videoId}`}
            frameborder="0"></iframe>    
    )
}

export default VideoPlayer



