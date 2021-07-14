import React from 'react';
import './RelatedVideos.css';
//testg
const relatedVideos = (props) => {
<<<<<<< HEAD
    console.log("relatedVideos",props);
    
    
    return(
        
        <div class="card-container" style={{width:'18rem'}}>
            <img src ="https://i.ytimg.com/vi/R3Ple1xplhs/default.jpg"></img>
        <div class="card-body"></div>
        <div class="card-body"> </div>
        <div class="card-body"> </div>
        <div class="card-body"> </div>
</div>
    )
=======
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
>>>>>>> 4867715ed0f8cfb9314c23c03b552d33edf2959c
}

export default relatedVideos;