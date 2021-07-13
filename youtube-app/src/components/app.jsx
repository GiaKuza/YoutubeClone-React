import React, {useState, useEffect} from 'react';
import axios from 'axios';

import NavBar from './navbar/NavBar';
import VideoPlayer from './videoPlayer/VideoPlayer';
import relatedVideos from './relatedVideos/RelatedVideos';

const AppHooks = () => {
    const [videoID, setVideoID] = useState("7lCDEYXw3mM"); // default video 
    //axios.get(http:wwww/${event.input}/) => returns video object : {videoID, description, title, etc...}
    

return(
    <div>
        <NavBar/>
		<VideoPlayer/>
        <relatedVideos/>
    </div>
)
}

export default AppHooks;