// app/api/delete-cookie/route.ts
import { cookies } from 'next/headers'

export async function POST() {
  const cookieStore = await cookies()
  cookieStore.delete('session')

  return new Response(JSON.stringify({ status: 'cookie deleted' }), {
    headers: { 'Content-Type': 'application/json' },
  })
}
