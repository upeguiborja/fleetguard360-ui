import Image from 'next/image'

export default function Signup() {
  return (
    <div className='flex w-full justify-center pt-55 gap-22'>
      <div className='max-w-152'>
        <Image className="w-full" src="/auth-image.png" alt="Bus de tranasporte - FleetGuard 360" width={610} height={554} />

      </div>
      <div className="flex flex-col gap-5 max-w-110">
        <Image className="mx-auto" src="/logo.svg" alt="FleetGuard 360" width={200} height={56} />
        <h1 className="text-5xl font-medium">Únete</h1>
        <p className="text-base">Viaja con tranquilidad. Consulta horarios, sigue tu ruta y recibe notificaciones.</p>
        <span className="w-full border-b-1 opacity-20"></span>
        <form className="flex flex-col gap-y-3.5 pt-3.5">

          <div className="flex flex-col gap-y-1.5 text-sm">
            <label htmlFor="Signup-Email">Email</label>
            <div>
              <input className="w-full h-11 rounded-lg px-3.5 py-2.5 border-1 border-[#D5D7DA]" type="email" id="Signup-Email" name="email" placeholder="mail@example.com" />
            </div>
          </div>

          <div className="flex flex-col gap-y-1.5 text-sm">
            <label htmlFor="Signup-Phone">Teléfono</label>
            <div>
              <input className="w-full h-11 rounded-lg px-3.5 py-2.5 border-1 border-[#D5D7DA]" type="tel" id="Signup-Phone" name="phone" placeholder="+57 (300) 123 4567" />
            </div>
          </div>

          <button className="bg-[#0086C9] text-white py-2 px-3.5 w-full rounded-lg" type="submit">Inicia Sesión</button>
        </form>

        <p className='font-semibold text-[#A4A7AE] text-sm/loose'>¿Ya tienes una cuenta? <a className="text-black" href="/login">Inicia sesión</a></p>
      </div>
    </div>
  )
}