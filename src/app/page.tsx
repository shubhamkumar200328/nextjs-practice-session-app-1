import GuideCard from "@/components/GuideCard";

export const metadata = {
  title: "Home | SYM"
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
        Welcome Home!
      </h1>

      <GuideCard/>
    </div>
  );
}
