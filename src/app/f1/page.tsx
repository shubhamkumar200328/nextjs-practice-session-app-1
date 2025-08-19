import Link from "next/link";

export default function F1(){
    return(
        <>
         <h1>f1: this is hereby to demonstrate the intercepting concepts</h1>
         <Link href={"/f1/f2"}>F2</Link>
        </>
    )
}