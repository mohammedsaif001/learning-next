import getUser from "@/app/lib/getUser";
import { Metadata } from "next";
import UserPosts from "./components/UserPosts";
import getUserPosts, { getUserPostsStaticISR } from "@/app/lib/getUserPosts";
import { Suspense } from "react";
import getAllUsers from "@/app/lib/getAllUsers";
import { notFound } from "next/navigation";

type userPageParams = {
  params: {
    id: number;
  };
};

export const generateMetadata = async ({
  params: { id },
}: userPageParams): Promise<Metadata> => {
  const userResult: Promise<User> = getUser(id);
  const userData = await userResult;

  if (!userData) {
    return {
      title: "User Not Found",
    };
  }

  return {
    title: userData.name,
    description: `This is the page of ${userData.name}`,
  };
};

const UserPage = async ({ params: { id } }: userPageParams) => {
  const userResult: Promise<User> = getUser(id);
  const userPostsData: Promise<Post[]> = getUserPostsStaticISR(id);

  const userData = await userResult;
  if (!userData) return notFound();

  return (
    <div className=" max-w-6xl mx-auto">
      <h2 className="text-3xl text-yellow-600 font-bold">{userData.name}</h2>
      <br />
      <Suspense fallback={"Loading User Posts...."}>
        <UserPosts promise={userPostsData} />
      </Suspense>
      <br />
    </div>
  );
};

export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  return users.map((user) => ({
    id: user.id.toString(),
  }));
}
export default UserPage;
