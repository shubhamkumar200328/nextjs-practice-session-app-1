"use client"; 

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-900 shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link href="/">Practice-App_1</Link>
      </div>

      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/docs">Documentation</Link>
        <Link href="/counter">Counter</Link>
      </div>

      <div className="space-x-4">
        <Link href="/login">Sign-In</Link>
        <Link href="/register">Sign-Up</Link>
        <Link href="/profile">Profile</Link>
      </div>
    </nav>
  );
}
