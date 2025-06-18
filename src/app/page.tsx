"use client";
import RouteCard from "@/components/RouteCard";
import api from "@/utils/api";
import { Route } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import Spinner from "@/components/Spinner";
import Select from "@/components/Select";
import Button from "@/components/Button";
import Dialog from "@/components/Dialog";

export default function Home() {
  const [routes, setRoutes] = useState<Route[]>([]);
  const [loading, setLoading] = useState(true);
  const [pendingOrigin, setPendingOrigin] = useState("");
  const [pendingDestination, setPendingDestination] = useState("");
  const [selectedOrigin, setSelectedOrigin] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [confirmationNumber, setConfirmationNumber] = useState<string | null>(
    null
  );

  const firstStopNames = Array.from(
    new Set(routes.map((route) => route.firstStopName))
  );
  const lastStopNames = Array.from(
    new Set(routes.map((route) => route.lastStopName))
  );

  const filteredRoutes = routes.filter((route) => {
    return (
      (!selectedOrigin || route.firstStopName === selectedOrigin) &&
      (!selectedDestination || route.lastStopName === selectedDestination)
    );
  });

  useEffect(() => {
    fetchRoutes();
  }, []);

  async function fetchRoutes() {
    setLoading(true);
    try {
      const fetchedRoutes = await api.get<Route[]>("/fg-api/routes");
      setRoutes(fetchedRoutes);
    } catch {
      toast.error("Error fetching routes. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  function handleSearch() {
    setSelectedOrigin(pendingOrigin);
    setSelectedDestination(pendingDestination);
  }

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
            <h2 className="text-[#0086C9] text-lg/normal font-bold">
              Programa tu viaje
            </h2>
          </div>

          <div className="bg-white rounded-lg flex items-end gap-8 p-4">
            <div className="flex flex-col gap-y-1.5 text-sm grow">
              <Select
                id="Search-Origin"
                name="origen"
                label="Origen"
                value={pendingOrigin}
                options={firstStopNames}
                onChange={(e) => setPendingOrigin(e.target.value)}
                placeholder="Selecciona tu origen"
              />
            </div>

            <div className="flex flex-col gap-y-1.5 text-sm grow">
              <Select
                id="Search-Destination"
                name="destino"
                label="Destino"
                value={pendingDestination}
                options={lastStopNames}
                onChange={(e) => setPendingDestination(e.target.value)}
                placeholder="Selecciona tu destino"
                disabled={!pendingOrigin}
              />
            </div>

            {/*
            <div className="flex flex-col gap-y-1.5 text-sm grow">
              <label htmlFor="Search-Date">Fecha</label>
              <div>
                <input
                  className="w-full h-11 rounded-lg px-3.5 py-2.5 border-1 border-[#D5D7DA] appearance-none"
                  type="date"
                  id="Search-Date"
                  name="fecha"
                  placeholder="Selecciona la fecha"
                />
              </div>
            </div>
            */}

            <Button label="Buscar" onClick={handleSearch} className="w-min" />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center pb-20">
        <div className="max-w-7xl grow flex flex-col gap-6">
          {loading ? (
            <div className="flex justify-center py-8">
              <Spinner />
            </div>
          ) : (
            filteredRoutes.map((route) => (
              <RouteCard
                route={route}
                key={route.id}
                onSuccessReservation={(confirmationNumber) => {
                  setConfirmationNumber(confirmationNumber);
                  setDialogOpen(true);
                }}
              />
            ))
          )}
        </div>
      </div>

      <Dialog isOpen={dialogOpen} onClose={() => setDialogOpen(false)}>
        <Dialog.SuccessIcon />
        <p className="text-lg/7 font-semibold mt-5 text-center">
          Tu reserva se realizó exitosamente
        </p>
        <p className="text-sm/5 text-[#535862] mt-2 text-center">
          La reserva #{confirmationNumber ?? "-"} se realizó exitosamente.
          <br />
          <br />
          Encontrarás los detalles de tu viaje, incluyendo fecha, hora y
          vehículo asignado, en el correo de confirmación que te hemos enviado.
        </p>
      </Dialog>
    </>
  );
}
