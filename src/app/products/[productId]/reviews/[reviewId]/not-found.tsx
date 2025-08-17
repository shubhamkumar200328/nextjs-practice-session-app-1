"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {

    const pathname = usePathname();
    const productId = pathname.split("/")[2]
    const reviewId = pathname.split("/")[4]

  return (
    <div className="cont text-center bg-pink-900 m-20 p-11">
      <h1 className="text-4xl text-gray-400 mb-5">
        404 not found : Review {reviewId} not found for the Product {productId}.
      </h1>
    </div>
  );
}
