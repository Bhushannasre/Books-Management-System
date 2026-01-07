import "./demo.css";
import { useState, useRef } from "react";
function Demo(){
    const [Data, setData]=useState(0);
   function Datahandle(){
     setData(Data+1);
    }
    let b= useRef(0);
    function Datahandleb(){
     b.current++;
     console.log(b.current);
    }
    return(
        <div className="container">
            <h1>{Data}</h1>
         <button onClick={Datahandle}>Increase A</button>
         <h1>{b.current}</h1>
         <button onClick={Datahandleb}>Increase B</button>
        </div>
    )
}
export default Demo;