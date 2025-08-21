import SetCookieButton from "@/components/SetCookieButton"
import { cookies } from "next/headers"

export default async function AccessCookies(){
    const cookieStore = await cookies()
    const session = cookieStore.get('session')?.value

    return (
        <>
            <div className="cont bg-cyan-950 text-white m-5 p-4 text-center">
                <h1 className=" text-2xl m-2">Cookie-Dealer</h1>
                <SetCookieButton/>
                <p className=" text-xl">
                    Session: {session ?? 'No session'}
                </p>
            </div>
        </>
    )
}