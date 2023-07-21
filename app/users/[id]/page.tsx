import getUser from "@/app/lib/getUser";
import { Metadata } from "next";
import UserPosts from "./components/UserPosts";
import getUserPosts from "@/app/lib/getUserPosts";
import { Suspense } from "react";

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

  return {
    title: userData.name,
    description: `This is the page of ${userData.name}`,
  };
};

const UserPage = async ({ params: { id } }: userPageParams) => {
  const userResult: Promise<User> = getUser(id);
  const userPostsData: Promise<Post[]> = getUserPosts(id);

  const userData = await userResult;

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
export default UserPage;
