import { DynamicMetadataNamingForClientServer } from "./dynamicMetadataUseClient"; 

export const metadata = { title: "Counter" } 

export default function CounterPage(){ 
    return ( 
    <> 
        <DynamicMetadataNamingForClientServer/> 
    </> 
    ) 
}