import Image from "next/image";

export default function Dialog() {
  return (
    <>
      <div className="h-18 bg-white flex justify-center">
        <div className="w-full max-w-7xl my-auto">
          <Image src="/logo.svg" alt="FleetGuard 360" width={200} height={56} />
        </div>
      </div>
      <div className="h-65 bg-gradient-to-b from-[#0086C9] via-[#D1E9FF] via-80% to-[rgba(255, 255, 255, 0)] flex justify-center items-center">
        <div className="bg-[#ffffff]/50 grow max-w-7xl rounded-lg">
          <div className="py-3 px-4 w-full">
            <h2 className="text-[#0086C9] text-lg/normal font-bold">Programa tu viaje</h2>
          </div>

          <div className="bg-white rounded-lg flex items-end gap-8 p-4">
            <div className="flex flex-col gap-y-1.5 text-sm grow">
              <label htmlFor="Search-Origin">Origen</label>
              <div>
                <input className="w-full h-11 rounded-lg px-3.5 py-2.5 border-1 border-[#D5D7DA]" type="text" id="Search-Origin" name="origen" placeholder="Selecciona tu origen" />
              </div>
            </div>

            <div className="flex flex-col gap-y-1.5 text-sm grow">
              <label htmlFor="Search-Destination">Destino</label>
              <div>
                <input className="w-full h-11 rounded-lg px-3.5 py-2.5 border-1 border-[#D5D7DA]" type="text" id="Search-Destination" name="destino" placeholder="Selecciona tu destino" />
              </div>
            </div>

            <div className="flex flex-col gap-y-1.5 text-sm grow">
              <label htmlFor="Search-Date">Fecha</label>
              <div>
                <input className="w-full h-11 rounded-lg px-3.5 py-2.5 border-1 border-[#D5D7DA] appearance-none" type="date" id="Search-Date" name="fecha" placeholder="Selecciona la fecha" />
              </div>
            </div>

            <button className="bg-[#0086C9] text-white py-2.5 px-4 rounded-lg h-min">Buscar</button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="max-w-7xl grow flex flex-col gap-6">
          <div className="rounded-lg overflow-hidden flex bg-white">
            <div className="grow p-4 flex items-center gap-4">
              <div>
                <p className="text-lg/7 font-bold">1:30 PM</p>
                <p className="text-xs/4.5">Medellín</p>
              </div>

              <span className="grow border-b-1 border-b-[#E9EAEB]"></span>

              <div className="text-xs/4.5 text-[#535862]">Directo</div>

              <span className="grow border-b-1 border-b-[#E9EAEB]"></span>

              <div>
                <p className="text-lg/7 font-bold">11:30 PM</p>
                <p className="text-xs/4.5">Bogotá</p>
              </div>
            </div>
            <div className="bg-[#F5FAFF] py-4 pr-4 pl-6 flex gap-3">
              <div className="text-right">
                <p className="text-xs/4.5">Precio</p>
                <p className="text-base/6 font-semibold mt-[-4px]">$250.000</p>
              </div>

              <button className="bg-[#0086C9] text-white py-2.5 px-4 rounded-lg h-min">Reservar</button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden flex bg-white">
            <div className="grow p-4 flex items-center gap-4">
              <div>
                <p className="text-lg/7 font-bold">1:30 PM</p>
                <p className="text-xs/4.5">Medellín</p>
              </div>

              <span className="grow border-b-1 border-b-[#E9EAEB]"></span>

              <div className="text-xs/4.5 text-[#535862]">Directo</div>

              <span className="grow border-b-1 border-b-[#E9EAEB]"></span>

              <div>
                <p className="text-lg/7 font-bold">11:30 PM</p>
                <p className="text-xs/4.5">Bogotá</p>
              </div>
            </div>
            <div className="bg-[#F5FAFF] py-4 pr-4 pl-6 flex gap-3">
              <div className="text-right">
                <p className="text-xs/4.5">Precio</p>
                <p className="text-base/6 font-semibold mt-[-4px]">$250.000</p>
              </div>

              <button className="bg-[#0086C9] text-white py-2.5 px-4 rounded-lg h-min">Reservar</button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden flex bg-white">
            <div className="grow p-4 flex items-center gap-4">
              <div>
                <p className="text-lg/7 font-bold">1:30 PM</p>
                <p className="text-xs/4.5">Medellín</p>
              </div>

              <span className="grow border-b-1 border-b-[#E9EAEB]"></span>

              <div className="text-xs/4.5 text-[#535862]">Directo</div>

              <span className="grow border-b-1 border-b-[#E9EAEB]"></span>

              <div>
                <p className="text-lg/7 font-bold">11:30 PM</p>
                <p className="text-xs/4.5">Bogotá</p>
              </div>
            </div>
            <div className="bg-[#F5FAFF] py-4 pr-4 pl-6 flex gap-3">
              <div className="text-right">
                <p className="text-xs/4.5">Precio</p>
                <p className="text-base/6 font-semibold mt-[-4px]">$250.000</p>
              </div>

              <button className="bg-[#0086C9] text-white py-2.5 px-4 rounded-lg h-min">Reservar</button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden flex bg-white">
            <div className="grow p-4 flex items-center gap-4">
              <div>
                <p className="text-lg/7 font-bold">1:30 PM</p>
                <p className="text-xs/4.5">Medellín</p>
              </div>

              <span className="grow border-b-1 border-b-[#E9EAEB]"></span>

              <div className="text-xs/4.5 text-[#535862]">Directo</div>

              <span className="grow border-b-1 border-b-[#E9EAEB]"></span>

              <div>
                <p className="text-lg/7 font-bold">11:30 PM</p>
                <p className="text-xs/4.5">Bogotá</p>
              </div>
            </div>
            <div className="bg-[#F5FAFF] py-4 pr-4 pl-6 flex gap-3">
              <div className="text-right">
                <p className="text-xs/4.5">Precio</p>
                <p className="text-base/6 font-semibold mt-[-4px]">$250.000</p>
              </div>

              <button className="bg-[#0086C9] text-white py-2.5 px-4 rounded-lg h-min">Reservar</button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden flex bg-white">
            <div className="grow p-4 flex items-center gap-4">
              <div>
                <p className="text-lg/7 font-bold">1:30 PM</p>
                <p className="text-xs/4.5">Medellín</p>
              </div>

              <span className="grow border-b-1 border-b-[#E9EAEB]"></span>

              <div className="text-xs/4.5 text-[#535862]">Directo</div>

              <span className="grow border-b-1 border-b-[#E9EAEB]"></span>

              <div>
                <p className="text-lg/7 font-bold">11:30 PM</p>
                <p className="text-xs/4.5">Bogotá</p>
              </div>
            </div>
            <div className="bg-[#F5FAFF] py-4 pr-4 pl-6 flex gap-3">
              <div className="text-right">
                <p className="text-xs/4.5">Precio</p>
                <p className="text-base/6 font-semibold mt-[-4px]">$250.000</p>
              </div>

              <button className="bg-[#0086C9] text-white py-2.5 px-4 rounded-lg h-min">Reservar</button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-0 left-0 bottom-0 right-0 bg-[#101828B2] flex justify-center items-center">
        <div className="grow max-w-100 bg-white rounded-xl overflow-hidden p-6">
          <div className="w-12 h-12">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="4" width="48" height="48" rx="24" fill="#E0F2FE" />
              <rect x="4" y="4" width="48" height="48" rx="24" stroke="#F0F9FF" strokeWidth="8" />
              <path d="M38 27.08V28C37.9988 30.1564 37.3005 32.2547 36.0093 33.9818C34.7182 35.709 32.9033 36.9725 30.8354 37.5839C28.7674 38.1953 26.5573 38.1219 24.5345 37.3746C22.5117 36.6273 20.7847 35.2461 19.611 33.4371C18.4373 31.628 17.8798 29.4881 18.0217 27.3363C18.1636 25.1846 18.9972 23.1363 20.3983 21.4971C21.7994 19.8578 23.6928 18.7154 25.7962 18.2401C27.8996 17.7649 30.1003 17.9823 32.07 18.86M38 20L28 30.01L25 27.01" stroke="#0086C9" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          </div>

          <p className="text-lg/7 font-semibold mt-5">Tu reserva se realizó exitosamente</p>
          <p className="text-sm/5 text-[#535862] mt-2">
            La reserva #[NúmeroDeReserva] se realizó exitosamente.<br /><br />
            Encontrarás los detalles de tu viaje, incluyendo fecha, hora y vehículo asignado, en el correo de confirmación que te hemos enviado.
          </p>

          <button className="bg-[#0086C9] text-white py-2 px-3.5 w-full rounded-lg mt-8" type="submit">Confirmar</button>
        </div>
      </div>
    </>
  );
}
