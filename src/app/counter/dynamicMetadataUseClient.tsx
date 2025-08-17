"use client"; 
import {useState} from "react"; 
export const DynamicMetadataNamingForClientServer = () =>{ 
    const [count, setCount] = useState(0); 
    return( 
    <> 
        <p>Count: {count}</p> 
        <button onClick={()=>{setCount(count+1)}}>click for Increament</button> 
    </> 
    ) 
}