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
                
            <div class="card-body"> 
                {console.log("videoObject",props.videoObject)}
                <img onClick={() => {props.getVideoId(props.videoObject.items[1].id.videoId)}} src ={props.videoObject.items[1].snippet.thumbnails.default.url}></img>
            </div>
            <div class="card-body">
                <img onClick={() => {props.getVideoId(props.videoObject.items[2].id.videoId)}} src ={props.videoObject.items[2].snippet.thumbnails.default.url}></img> 
            </div>
            <div class="card-body">
                <img onClick={() => {props.getVideoId(props.videoObject.items[3].id.videoId)}} src ={props.videoObject.items[3].snippet.thumbnails.default.url}></img> 
            </div>
            <div class="card-body">
                <img onClick={() => {props.getVideoId(props.videoObject.items[4].id.videoId)}} src ={props.videoObject.items[4].snippet.thumbnails.default.url}></img>
            </div>
            </div>
            : <h1></h1>
            }

        </>
    );
}

export default relatedVideos;