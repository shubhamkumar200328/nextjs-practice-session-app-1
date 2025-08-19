
export default function ComplexDashboardLayout({
    children,
    usersanalytics,
    revenue,
    notifications,
    login
}:{
    children: React.ReactNode,
    usersanalytics: React.ReactNode,
    revenue: React.ReactNode,
    notifications: React.ReactNode,
    login: React.ReactNode
}){
    const isloggedIn = true;
    
    return isloggedIn ? (
        <div className=" text-center p-11 m-11 items-center rounded-md">
            <div>{children}</div>                                    {/*  Content from page.tsx */}
            <div style={{display:"flex", textAlign:"center", margin:"auto", flexDirection:"row"}}>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <div>{usersanalytics}</div>                          {/*  component for user analytics */}
                    <div>{revenue}</div>                                 {/*  component for revenue metrics */}
                </div>
                <div style={{ display:"flex", flex:1}}>{notifications}</div>     {/*  component for notifications */}
            </div>
        </div>
    ):(
        login
    )
}