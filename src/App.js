import './videoComponent/Video';
import Video from './videoComponent/Video';
import PlayButton from './videoComponent/PlayButton';
import Counter from './videoComponent/Counter';
import AddVideo from './videoComponent/AddVideo'
import { useState } from 'react';

function App() {
console.log('App');
const videosdb = [{id: 1,bgColor: "Green", title:"Welcome to JS Course", verified: true, channel:"Coder Bhai", view:"100K", time:"10 Month ago"},
{id: 2, bgColor: "Blue", title:"Welcome to React JS Course", verified: false, channel:"Coder Bhai", view:"500K", time:"1 Month ago"}];
const [videos, setVideos] = useState(videosdb);  


function addVideos(video){
  setVideos([...videos, {id :video.length + 1,...video}]);
}
return (
    <>    
    <AddVideo addVideos ={addVideos}></AddVideo>
    <div style={{display:'block'}}>
        {videos.map(a =>
        <>        
        <Video key ={a.id} bgColor= {a.bgColor} title= {a.title} verified ={a.verified} channel ={a.channel} view ={a.view} time ={a.time}>
        <PlayButton property ="play" onPlay ={()=>{console.log('playy')}} onPause ={()=>{console.log('pause')}} >{a.title}</PlayButton>
        </Video>        
        </>          
        )}
     </div>
                  
    </>
  );
}

export default App;
