import { Metadata } from "next"

type Props = {
    params: Promise<{productId: string}>;
};
export const generateMetadata = async ({params}:Props): Promise<Metadata> => {
    const pId = (await params).productId
    return {
        title: {
            default: `Product-${pId} Reviews | SYM`,
            template: "%s| SYM"
        },
        description: "Save-Your-Memories",
    }
}


export default async function({params}:{params:Promise<{productId:string}>}){

    const {productId} = await params
    return (
        <>
            <h1 className=" text-center mt-12 text-3xl">Reviews for the product : {productId}</h1>
            <div className="contA text-center bg-gray-700 mx-55 my-5 p-10">
                <ul>
                    <li>Review: 1</li>
                    <li>Review: 2</li>
                    <li>Review: 3</li>
                    <li>Review: 4</li>
                </ul>
            </div>
        </>
    )
}