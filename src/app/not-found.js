import Link from "next/link";

export default function notfound() {
  return (
    <>
      <h1>Sorry Employee not found</h1>
      <Link href="/">Back Home</Link>
    </>
  );
}
