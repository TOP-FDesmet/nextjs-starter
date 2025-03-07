"use client";
import { useState } from "react";

export default function ProductsTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [info, setInfo] = useState("");

  return (
    <>
      {children}
      <input
        className="border"
        value={info}
        onChange={(e) => setInfo(e.target.value)}
      />
    </>
  );
}
