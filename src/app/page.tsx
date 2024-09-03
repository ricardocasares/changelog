import { description, title } from "@/config";

export default function Home() {
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <h2 className="text-xl leading-tight text-gray-500">{description}</h2>
    </div>
  );
}
