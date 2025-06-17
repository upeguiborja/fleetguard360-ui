import Image from "next/image";
import SignupForm from "./SignupForm";

export default function Signup() {
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
        <Image
          className="mx-auto"
          src="/logo.svg"
          alt="FleetGuard 360"
          width={200}
          height={56}
        />
        <h1 className="text-5xl font-medium">Únete</h1>
        <p className="text-base">
          Viaja con tranquilidad. Consulta horarios, sigue tu ruta y recibe
          notificaciones.
        </p>
        <span className="w-full border-b-1 opacity-20"></span>

        <SignupForm />
        
        <p className="font-semibold text-[#A4A7AE] text-sm/loose">
          ¿Ya tienes una cuenta?{" "}
          <a className="text-black" href="/login">
            Inicia sesión
          </a>
        </p>
      </div>
    </div>
  );
}
