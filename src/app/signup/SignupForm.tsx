"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useState } from "react";
import { toast } from "sonner";

const SignupForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    console.log("Email submitted:", email);
    console.log("Phone submitted:", phone);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, phone }),
      });

      if (res.ok) {
        toast.success(
          "Registro exitoso. Por favor, revisa tu correo electrónico para verificar tu cuenta."
        );
      }

      if (!res.ok) {
        const error = await res.json();
        toast.error(
          `¡Ups! Ocurrió un error: ${error.message || "Error desconocido"}`
        );
      }
    } catch {
      toast.error(
        "Ocurrió un error al procesar tu registro. Por favor, inténtalo de nuevo más tarde."
      );
    }

    setIsLoading(false);
  }

  return (
    <form className="flex flex-col gap-y-3.5 pt-3.5" onSubmit={handleSubmit}>
      <Input
        id="Signup-Email"
        name="email"
        type="email"
        label="Email"
        placeholder="mail@example.com"
        required
      />
      <Input
        id="Signup-Phone"
        name="phone"
        pattern="^\(\d{3}\)\d{3}\d{4}$"
        type="tel"
        label="Teléfono"
        placeholder="+57 (300) 123 4567"
        required
      />
      <Button label="Registrate" isLoading={isLoading} type="submit" />
    </form>
  );
};

export default SignupForm;
