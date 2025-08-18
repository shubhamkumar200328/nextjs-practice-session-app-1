"use client"; 
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-gray-900 shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link href="/"
          className={`px-3 py-2 rounded-md hover:bg-gray-700 transition ${pathname === "/" ? "text-pink-700 text-xl font-bolder" : ""}`}
        >Practice-App_1</Link>
      </div>

      <div className="space-x-4">
        <Link href="/about" replace
          className={`px-3 py-2 text-white rounded-md hover:bg-gray-700 transition ${pathname === "/about" ? "bg-[#542e2e] font-semibold" : ""}`}
        >About</Link>
        <Link href="/products"
          className={`px-3 py-2 text-white rounded-md hover:bg-gray-700 transition ${pathname === "/products" ? "bg-[#542e2e] font-semibold" : ""}`}
        >Products</Link>
        <Link href="/docs"
          className={`px-3 py-2 text-white rounded-md hover:bg-gray-700 transition ${pathname === "/docs" ? "bg-[#542e2e] font-semibold" : ""}`}
        >Documentation</Link>
        <Link href="/counter"
          className={`px-3 py-2 text-white rounded-md hover:bg-gray-700 transition ${pathname === "/counter" ? "bg-[#542e2e] font-semibold" : ""}`}
        >Counter</Link>
        <Link href="/loadingconcept"
          className={`px-3 py-2 text-white rounded-md hover:bg-gray-700 transition ${pathname === "/loadingconcept" ? "bg-[#542e2e] font-semibold" : ""}`}
        >Fetch Users</Link>
      </div>

      <div className="space-x-4">
        <Link href="/login"
          className={`px-3 py-2 text-white rounded-md hover:bg-gray-700 transition ${pathname === "/login" ? "bg-[#542e2e] font-semibold" : ""}`}
        >Sign-In</Link>
        <Link href="/register"
          className={`px-3 py-2 text-white rounded-md hover:bg-gray-700 transition ${pathname === "/register" ? "bg-[#542e2e] font-semibold" : ""}`}
        >Sign-Up</Link>
        <Link href="/profile"
          className={`px-3 py-2 text-white rounded-md hover:bg-gray-700 transition ${pathname === "/profile" ? "bg-[#542e2e] font-semibold" : ""}`}
        >Profile</Link>
      </div>
    </nav>
  );
}
