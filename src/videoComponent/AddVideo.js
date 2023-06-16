import { useState } from 'react';
import '../videoComponent/addVideo.css' 

function AddVideo({addVideos}){
    const [video, setVideos] = useState({
      bgColor: "Green",  
      verified: true,      
      view:"100K", 
      time:"10 Month ago"});
    
    function handlerSubmit(e){
        e.preventDefault();
        console.log(video);
        addVideos(video);
    }
    function handler(e){
        setVideos({...video,[e.target.name]: e.target.value});
    }
return(
<>
  <input type="text" name='title' placeholder='title' onChange={handler}></input>
  <input type="text" name = 'channel' placeholder='channel' onChange={handler}></input>
  <button style={{marginBottom: '1rem'}} onClick={handlerSubmit}>Add Video</button>
</>);
}

export default AddVideo;