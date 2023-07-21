import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="bg-blue-600">
      About Page
      <br />
      <Link href={"/"}>
        <button className="text-zinc-300 bg-red-600 py-2 px-4 my-4 ">
          Go to Main Section
        </button>
      </Link>
    </div>
  );
};
export default AboutPage;
