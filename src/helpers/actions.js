"use server";
import axios from "axios";
import { redirect } from "next/navigation";

export async function counterTrigger() {
  // console.log("counter Tigger");
}

export async function addEmployee(prevState, formdata) {
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  // console.log(prevState);
  try {
    if (formdata.get("fullname") === "") {
      throw new Error("The name is required");
    }

    await axios.post("http://localhost:3004/employees", {
      fullname: formdata.get("fullname"),
      position: formdata.get("position"),
      age: formdata.get("age"),
    });

    return { success: true, message: "Name added" };
  } catch (e) {
    return { success: false, message: e.message };
  }
}

export async function editEmployee(formdata) {
  const { fullname, position, age } = formdata;
  try {
    if (age < 18) {
      return { error: "you neeed to at least 18" };
    }
    const res = await fetch(`http://localhost:3004/employees/${formdata.id}`, {
      method: "PATCH",
      headers: {
        Accept: "apllication/json",
        "Content-Type": "apllication/json",
      },
      body: JSON.stringify({
        fullname,
        position,
        age,
      }),
    });
    if (!res.ok) {
      return { error: `${res.status} ${res.statusText}` };
    }
  } catch (error) {
    return { error: error };
  }
  redirect("/");
}

export async function deleteEmployee(ID) {
  await fetch(`http://localhost:3004/employees/${ID}`, {
    method: "DELETE",
  });
  redirect("/");
}
