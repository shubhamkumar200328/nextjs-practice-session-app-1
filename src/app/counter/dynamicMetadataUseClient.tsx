"use client"; 
import {useState} from "react"; 
export const DynamicMetadataNamingForClientServer = () =>{ 
    const [count, setCount] = useState(0); 
    return( 
    <> 
        <p>Count: {count}</p> 
        <button onClick={()=>{setCount(count+1)}} className=" bg-gray-500 rounded-md px-2 text-2xl m-5 cursor-pointer">Click for Increament</button> 
    </> 
    ) 
}