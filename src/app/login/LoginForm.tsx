"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";

const LoginForm = () => {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    console.log("Email submitted:", email);
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

      <Button label="Iniciar sesión" />
    </form>
  );
};

export default LoginForm;
