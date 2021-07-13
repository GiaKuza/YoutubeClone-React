import React, {useState, useEffect} from 'react';
import axios from 'axios';
import apiKey from '../../keys';
import NavBar from './navbar/NavBar';
import VideoPlayer from './videoPlayer/VideoPlayer';

const AppHooks = () => {

    
return(
    <>
        <NavBar/>
		<VideoPlayer/>
    </>
)
}

export default AppHooks;