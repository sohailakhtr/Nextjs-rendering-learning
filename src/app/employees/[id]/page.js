import Link from "next/link";
import { notFound } from "next/navigation";
import { deleteEmployee } from "@/helpers/actions";

async function getEmployee(ID) {
  const res = await fetch(`http://localhost:3004/employees/${ID}`);
  if (!res.ok) {
    // throw new Error("Employee not find");
    return notFound();
  }
  return res.json();
}

export default async function EmployeesByID({ params }) {
  const ID = (await params).id;
  const employee = await getEmployee(ID);
  const deleteAction = deleteEmployee.bind(null,ID);

  // const employee = await axios.get(`http://localhost:3004/employees/${ID}`);

  return (
    <>
      <h3>BY ID Employees</h3>
      <h1> {employee.fullname} </h1>

      <div>
        <h4>Position:{employee.position}</h4>
        <h4>Age:{employee.age}</h4>
      </div>
      <Link href={`/form/edit/${employee.id}`}>Edit Employee</Link>

      <hr />
      <form action={deleteAction}>
        <button type="submit">Delete user</button>
      </form>
    </>
  );
}
