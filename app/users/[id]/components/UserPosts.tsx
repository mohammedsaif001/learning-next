type Props = {
  promise: Promise<Post[]>;
};

async function UserPosts({ promise }: Props) {
  const posts = await promise;
  return (
    <div>
      {posts.map((post) => {
        return (
          <article key={post.id}>
            <h3 className="text-xl bg-slate-700">{post.title}</h3>
            <p>{post.body}</p>
            <br />
          </article>
        );
      })}
    </div>
  );
}
export default UserPosts;
