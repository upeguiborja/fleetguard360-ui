import Logo from "@/components/Logo";
import Image from "next/image";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <div className="flex w-full justify-center pt-55 gap-22">
      <div className="max-w-152">
        <Image
          className="w-full"
          src="/auth-image.png"
          alt="Bus de tranasporte - FleetGuard 360"
          width={610}
          height={554}
        />
      </div>
      <div className="flex flex-col gap-5 max-w-110">
        <Logo />
        <h1 className="text-5xl font-medium">Inicia Sesión</h1>
        <p className="text-base">
          Viaja con tranquilidad. Consulta horarios, sigue tu ruta y recibe
          notificaciones.
        </p>
        <span className="w-full border-b-1 opacity-20"></span>

        <LoginForm />

        <p className="font-semibold text-[#A4A7AE] text-sm/loose">
          ¿No tienes una cuenta?{" "}
          <a className="text-black" href="/signup">
            Regístrate
          </a>
        </p>
      </div>
    </div>
  );
}
