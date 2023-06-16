import './Video.css';

export default function Video({bgColor, title, verified, channel, view, time,children}){
     console.log("video");
    return (
        <>   
        <div style={{display: 'inline-block', maxHeight:'30px', margin: '1rem'}}>
        <img src="https://picsum.photos/id/1/200/300" alt='img 1' />
        <h3 style={{ color: bgColor }}>{title}</h3> 
        <p>{channel}</p>
        <p>{view}</p>
        <p>{time}</p>        
        {verified ? <div>Verified true</div> : <div>Verified false</div>}  
        <div>
        {children}
       </div>       
        </div>          
       
        </>
      );
}