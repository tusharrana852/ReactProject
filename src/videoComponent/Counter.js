import { useState } from "react";

function Counter(){
    const [number, setNumber]= useState(0);
    console.log("Counter");
    function handler(){
        setNumber(number=> number + 1);      
        console.log(number);
    }
    function handler2 (){
        setNumber(number - 1);   
    }
 return (
    <>
     <h1>{number}</h1>
     <button onClick={handler}>Add</button>    
     <button onClick={handler2}>Sub</button> 
    </>
 )

}

export default Counter;