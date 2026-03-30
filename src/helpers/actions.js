"use server";

import axios from "axios";
import { resolve } from "styled-jsx/css";

export async function counterTrigger() {
  console.log("counter Tigger");
}

export async function addEmployee(prevState, formdata) {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log(prevState);
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
