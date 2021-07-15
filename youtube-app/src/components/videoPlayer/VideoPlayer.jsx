import React from 'react';
import './VideoPlayer.css';

function VideoPlayer(props) {
<<<<<<< HEAD
    console.log('videoplayer thumbnail url', props)
=======
    console.log("videoId",props.videoId);
>>>>>>> a815c18e6059a985c03a3ef23ec852c08e4cb8ca
    return (     
            <iframe id="ytplayer" type="text/html" width="640" height="360"
            src={`https://www.youtube.com/embed/${props.videoId}`}
            frameborder="0"></iframe> 
           
    )
    
}

export default VideoPlayer



