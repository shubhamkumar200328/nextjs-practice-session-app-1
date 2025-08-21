
// // First Header method which provide by NextJs  : content-type is text/plain
// import { headers } from "next/headers";

// export async function GET(){
    //     const headerList = await headers();
    //     console.log(headerList.get("Authorization"));
    //     return new Response("First Header method in route handlers : Profile API data")
    // }
    
    

// Second Header method : content-type is text/plain
// Also add Cookies-route handlers
import { NextRequest } from "next/server";

export async function GET(request:NextRequest){
    const requestHeaders = new Headers(request.headers);
    console.log(requestHeaders.get("Authorization"));
      
    const theme = request.cookies.get("theme");
    console.log(theme);
    
    return new Response("<h1>Second Header method in route handlers with 'Content-Type: text/html': Profile API data</h1> <h2>Also adding cookie-route handler</h2>",{
         headers: {
             "Content-Type": "text/html",
             "Set-Cookie": "theme=dark"
         },
    });
}


// // First Header method which provide by NextJs  : content-type is text/html
// // Also add Cookies-route handlers
// import { headers, cookies } from "next/headers";

// export async function GET(){
//     const headerList = await headers();
//     console.log(headerList.get("Authorization"));

//     const cookieStore = await cookies();
//     cookieStore.set("resultsPerPage", "20");
//     console.log(cookieStore.get("resultsPerPage"));
    
//     return new Response("<h1>First Header method in route handlers with 'Content-Type: text/html': Profile API data</h1> <h2>Also adding cookie-route handler</h2>",{
//         headers: {
//             "Content-Type": "text/html",
//             "Set-Cookie": "theme=dark"
//         },
//     });
// }


