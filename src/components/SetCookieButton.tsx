// components/SetCookieButton.tsx
'use client'

export default function SetCookieButton() {
  const handleClick = async () => {
    await fetch('/api/set-cookie', { method: 'POST' })
    alert('Cookie has been set!')
  }

  return <button onClick={handleClick}>Set Cookie</button>
}
