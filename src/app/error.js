"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      <h1>{error.message || "something went wroung"}</h1>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}
