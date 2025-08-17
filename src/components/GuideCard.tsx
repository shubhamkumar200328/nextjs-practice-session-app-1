export default function GuideCard(){

    return (
        <div className=" m-7">
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 space-y-6">
        <div className="border-l-4 border-blue-400 pl-4">
          <p className="text-lg font-semibold text-gray-800 mb-2">
            In this session I have Practiced:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Dynamic nested routing</li>
            <li>Nested layout</li>
            <li>Slug: catch all statements using conditional statements</li>
            <li>Custom 404 not found pages</li>
          </ul>
        </div>

        <div>
          <p className="text-md text-gray-800 mb-2">
            For getting the actual workflow of the concept, we have to type the URL manually. Look at the following:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              For specific product with ID or name:{" "}
              <span className="text-pink-700 font-mono">localhost:3000/products/id</span>
            </li>
            <li>
              For specific product and reviews with ID or name:{" "}
              <span className="text-pink-700 font-mono">localhost:3000/products/id/reviews/id</span>
            </li>
            <li>
              For specific docs with ID or name:{" "}
              <span className="text-pink-700 font-mono">localhost:3000/docs/routing</span>
            </li>
            <li>
              For nested docs (catch all):{" "}
              <span className="text-pink-700 font-mono">localhost:3000/docs/routing/catch-all-statements</span>
            </li>
            <li>
              Again for reviews:{" "}
              <span className="text-pink-700 font-mono">localhost:3000/products/id/reviews/id</span>
            </li>
          </ul>
        </div>
      </div>
        </div>
    )
}