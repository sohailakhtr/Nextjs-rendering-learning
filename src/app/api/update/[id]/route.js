// export async function GET(request, { params }) {
//   return Response.json({ param: params });
export async function PATCH(request, { params }) {
  const data = await request.json();
  const ID = (await params).id;

  const res = await fetch(`http://localhost:3004/employees/${ID}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    return Response.json(res.statusText, {
      status: res.status,
    });
  }
  return Response.json("ok", { status: 200 });
}
