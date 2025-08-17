import GuideCard from "@/components/GuideCard";

export const metadata = {
    title: "SYM-documentation"
}

export default async function({params}:{params:Promise<{slug: string[]}>}){
    const {slug} = await params;

    if(slug?.length===2){
        return <h1 className="text-2xl text-center m-13">Viewing documentation for the feature <span className=" text-red-400">{slug[0].toUpperCase()}</span> and the concept <span className=" text-red-400">{slug[1].toUpperCase()}</span>......</h1>
    }

    else if(slug?.length===1){
        return <h1 className="text-2xl text-center m-15">Viewing documentation for the feature <span className=" text-green-400">{slug[0].toUpperCase()}</span>........ </h1>
    }

    return (
        <>
         <h1 className="text-3xl text-center m-11">Documentation Default Pages</h1>
         <GuideCard/>
        </>
    )
}