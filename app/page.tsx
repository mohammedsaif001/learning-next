import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-yellow-600 ">
      Home page
      <br />
      <Link href={"/about"}>
        <button className="text-zinc-300 bg-red-600 py-2 px-4 my-6">
          Go to About Section
        </button>
      </Link>
    </div>
  );
}
