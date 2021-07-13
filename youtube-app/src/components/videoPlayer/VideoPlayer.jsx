import React from 'react';
import './VideoPlayer.css';

function VideoPlayer() {
    return (
        <div>
            <iframe id="ytplayer" type="text/html" width="640" height="360"
            src="https://www.youtube.com/embed/7lCDEYXw3mM"
            frameborder="0"></iframe>
        </div>
    )
}

export default VideoPlayer



