export default async function getUserPosts(userId: number) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  // Below is the Default as its SSR and the response is cached and need not be called again
  // Suppose if some data is changed in the server but the client is seeing the same previous data because the content is cached in the memory
  // To overcome this change force-cache to no-store

  // const res = await fetch(
  //   `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
  //   { cache: "force-cache" }
  // );

  if (!res.ok) return undefined;

  return res.json();
}

// This below functions means, the page will be build at build time but in case if the data is changed it will revalidate after 60sec which is great mix of both ssr and ssg known as ISR incremental static generation

export async function getUserPostsStaticISR(userId: number) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) return undefined;

  return res.json();
}
