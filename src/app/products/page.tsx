import GuideCard from "@/components/GuideCard"

import { Metadata } from "next"

export const metadata: Metadata = {
    title: {
        default: "Products | SYM",
        template: "%s | SYM",
    },
    description: "Save-Your-Memories",
}
export default function Products(){

    return (
        <>
            <h1>This is Product page.....</h1>
            <GuideCard/>
        </>
    )
}