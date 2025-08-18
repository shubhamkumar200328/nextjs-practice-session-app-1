import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
    params: Promise<{productId: string, reviewId:string}>;
};


export const generateMetadata = async ({params}:Props): Promise<Metadata> => {
    const pId = (await params).productId
    const rId = (await params).reviewId
    return {
        title: `Product-${pId}, Review-${rId} | SYM`
    }
}

export default async function ProductReview({ params }: Props){
    const rId = (await params).reviewId
    const pId = (await params).productId

    if(parseInt(rId)>1000){
        return notFound();
    } 

    return <h1>Review {rId} for product {pId}</h1>
}