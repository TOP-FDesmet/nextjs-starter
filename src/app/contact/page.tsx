"use client";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();

  const handleSendContactForm = () => {
    console.log("Formulaire de contact envoyé !");
    router.push("/");
  };

  return (
    <>
      <h1>Ma page de contact</h1>
      <button onClick={handleSendContactForm}>Valider le formulaire</button>
    </>
  );
}
