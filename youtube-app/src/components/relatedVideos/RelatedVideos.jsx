import React from 'react';
import './RelatedVideos.css';
//testg
const relatedVideos = (props) => {
    //console.log("relatedVideos",props);
    //console.log("URL",props.videoObject.items[1].snippet.thumbnails.default.url)
    
    return(
        <>
            {props.videoObject.items ? 
            <div class="card-container" style={{width:'18rem'}}>
                
            <div  class="card-body"> 
                <img src ="https://i.ytimg.com/vi/R3Ple1xplhs/default.jpg"></img>
            </div>
            <div class="card-body"> </div>
            <div class="card-body"> </div>
            <div class="card-body"> </div>
            </div>
            : <h1></h1>
            }

        </>
    );
}

export default relatedVideos;