import { useState } from "react";

function PlayButton({property, children, onPlay, onPause}){
  //  var playing = false;   //don't use this approach
  console.log('Play Button');
    const[playing, setPlaying] = useState(false);
    function handler(e){
      // To stop event bubbling .i.e event propogation
      // e.stopPropogation;
        if(!playing) onPlay();
        else onPause();        
        setPlaying(!playing);
    }
return (
    <>
     <button onClick={handler}>{children}: {playing ? '>': '||'}</button>
    </>
);
}

export default PlayButton;