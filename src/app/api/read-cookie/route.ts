// app/api/read-cookie/route.ts
import { cookies } from 'next/headers'

export async function GET() {
  const cookieStore = await cookies()
  const session = cookieStore.get('session')?.value

  console.log(session);

  return new Response(JSON.stringify({ session }), {
    headers: { 'Content-Type': 'application/json' },
  })
}
