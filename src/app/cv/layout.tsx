import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV Florian Desmet",
};

export default function CVLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <h1>Layout CV</h1>
    </>
  );
}
