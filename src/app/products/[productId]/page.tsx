import { Metadata } from "next";

type Props = {
    params: Promise<{productId: string}>;
};


export const generateMetadata = async ({params}:Props): Promise<Metadata> => {
    const pId = (await params).productId
    return {
        title: `Product-${pId}`
    }
}

export default async function ProductDetails({ params }: Props){
    const productId = (await params).productId
    return <h1>Details about product {productId}</h1>
}