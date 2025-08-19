export const Card = ({children}:{children: React.ReactNode}) => {
    const cardStyle = {
        width:"500px",
        padding: "100px",
        margin: "10px",
        boxShadow: "0 4px 8px 0 rgba(10, 255, 239, 0.86)",
        //border: "1px solid #ddd",
        borderRadius: "7px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    };

    return (
    <>
        <div style={cardStyle}>{children}</div>
    </>
    )
}