
export default function ProductDetailsLayout({children,}:{children:React.ReactNode}){

    return (
        <>
            {children}
            <h2>Nested Layout:Featured products</h2>
        </>
    )
}