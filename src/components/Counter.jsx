import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0); // 0 i

  return (
    <>
      <span class='text-yellow-300 text-xl mr-4'>{count}</span>
      <button
        class='border px-4 py-4 text-xl'
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
      <button
        class='border px-4 py-4 text-xl'
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
    </>
  );
};
