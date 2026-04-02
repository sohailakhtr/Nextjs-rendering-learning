import Link from "next/link";
import Counter from "@/components/counter";
import { cache } from "react";
import { revalidatePath } from "next/cache";

async function getEmployee() {
  const res = await fetch(`http://localhost:3004/employees`, {
    next: { revalidatePath: 5 },
  });
  if (!res.ok) {
    throw new Error("Could not find Employee");
  }
  return res.json();
}

export default async function Home() {
  const employees = await getEmployee();
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  // const employees = await axios("http://localhost:3004/employees");
  // console.log(Employee.data);

  const showEmployees = employees.map((employee) => (
    <div key={employee.id} className="col">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{employee.fullname}</h3>
          <p className="card-text">{employee.position}</p>
          <p className="card-text">{employee.age}</p>
          <Link href={`/employees/${employee.id}`} className="btn btn-info">
            Go to employee
          </Link>
        </div>
      </div>
    </div>
  ));

  // const counterTrigger = async() => {
  //   "use server";
  //   console.log("test");
  // };

  return (
    <>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {showEmployees}
      </div>
      {/* <Counter counterTrigger={counterTrigger} /> */}
      <Counter />
    </>
  );
}
