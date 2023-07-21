import Link from "next/link";
import getAllUsers from "../lib/getAllUsers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users Data",
  description: "Fetching User Information from Typicode",
};

const UsersPage = async () => {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;
  return (
    <section className=" max-w-6xl mx-auto mt-9">
      <h1 className="text-3xl mb-4 font-bold">List of Users</h1>
      {users.map((user) => {
        return (
          <p key={user.id} className="my-2">
            <span>{user.id} .</span>
            <Link href={`/users-ssg/${user.id}`}> {user.name} </Link>
          </p>
        );
      })}
    </section>
  );
};

export default UsersPage;
