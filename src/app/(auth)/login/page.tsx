"use client"
import { useRouter } from "next/navigation";


export default function LogIn(){

    const router = useRouter();
    const handleClick = () => {
        console.log("logged in successfully!");
        router.push("/");
    }

    return(
        <>
            <h1>Click button to login.</h1>
            <button onClick={handleClick} className=" bg-gray-600 px-2 m-15 text-center text-2xl rounded-md cursor-pointer">Login →</button>
        </>
    )
}