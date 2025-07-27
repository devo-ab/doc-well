"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div>
      <h2>Something Went Wrong</h2>
      <h2>{error?.message}</h2>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}
