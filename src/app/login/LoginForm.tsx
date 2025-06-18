"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import api from "@/utils/api";
import { useState } from "react";
import { toast } from "sonner";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    setIsLoading(true);
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    try {
      await api.post("/fg-api/auth/login", { email })
      toast.success("Te hemos enviado un enlace de acceso a tu correo electrónico. Por favor revisa tu bandeja de entrada para continuar.");
    } catch {
      toast.error("Error al iniciar sesión. Por favor, inténtalo de nuevo.");
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

      <Button label="Iniciar sesión" type="submit" isLoading={isLoading}/>
    </form>
  );
};

export default LoginForm;
