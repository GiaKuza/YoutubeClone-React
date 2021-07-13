import React, {useState, useEffect} from 'react';
import axios from 'axios';

import NavBar from './navbar/NavBar';
import VideoPlayer from './videoPlayer/VideoPlayer';
import relatedVideos from './relatedVideos/RelatedVideos';

const AppHooks = () => {

    
return(
    <div>
        <NavBar/>
		<VideoPlayer/>
        <relatedVideos/>
    </div>
)
}

export default AppHooks;