import { cookies, headers } from "next/headers";
export async function GET() {
  const cookiStore = cookies();
  const tokrn = (await cookiStore).get("token");
  const auth = (await headers()).get("authoriatiion");
  const type = (await headers()).get("Content-type");
  console.log(auth, type);

  // console.log(request);
  // const x = request.nextUrl.searchParams.get("x");
  // const y = request.nextUrl.searchParams.get("y");
  // return Response.json({ x, y });
  // return Response.json({ message: "Hello there..." });
  const res = await fetch(`http://localhost:3004/employees`, {
    next: { revalidate: 30 },
  });
  const employees = await res.json();

  return Response.json(employees, {
    status: 200,
    headers: { "Set-cookie": "token= Bearer kkrlwff" },
  });
}
