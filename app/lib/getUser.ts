export default async function getUser(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) throw new Error("Failed to Fetch User Data");
  return res.json();
}
