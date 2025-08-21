// app/api/set-cookie/route.ts
import { cookies } from 'next/headers'

export async function POST() {
  const cookieStore = await cookies()
  cookieStore.set({
    name: 'session',
    value: 'abc123',
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24, // 1 day
  })

  return new Response(JSON.stringify({ status: 'cookie set' }), {
    headers: { 'Content-Type': 'application/json' },
  })
}
