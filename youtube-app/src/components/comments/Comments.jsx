import React from 'react';
import './Comments.css';

// api call that grabs a list of comments from our own api call and renders it onto the screen We'll need to
//pass video id as props and use it to make api to backend add forms for userinput and then make api post to send data to backend
//add likes/dislikes to comments as well.

const Comments = (props) => { 
   
    return (
    <div>
<input className="form-control2" type="text" placeholder="Enter a comment"></input>
<button type="comment-button" className="btn btn-dark" onClick=''>Submit</button>

</div>
)
};
//add post request to app.jsx
//add put request to update app.jsx

export default Comments;