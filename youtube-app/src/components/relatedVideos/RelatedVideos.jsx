import React from 'react';
import './RelatedVideos.css';
//testg
const relatedVideos = (props) => {
    console.log("relatedVideos",props);

    
    return(
        
        <div class="card-container" style={{width:'18rem'}}>
            <img></img>
        <div class="card-body">{props.videoObject.items[1].snippet.thumbnails.default.url}</div>
        <div class="card-body"> </div>
        <div class="card-body"> </div>
        <div class="card-body"> </div>
</div>
    )
}

export default relatedVideos;