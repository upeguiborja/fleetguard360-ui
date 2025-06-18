"use client"
import RouteCard from "@/components/RouteCard";
import api from "@/utils/api";
import { Route } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import Spinner from "@/components/Spinner";

export default function Home() {
  const [routes, setRoutes] = useState<Route[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching routes from an API
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
              <label htmlFor="Search-Origin">Origen</label>
              <div>
                <input
                  className="w-full h-11 rounded-lg px-3.5 py-2.5 border-1 border-[#D5D7DA]"
                  type="text"
                  id="Search-Origin"
                  name="origen"
                  placeholder="Selecciona tu origen"
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-1.5 text-sm grow">
              <label htmlFor="Search-Destination">Destino</label>
              <div>
                <input
                  className="w-full h-11 rounded-lg px-3.5 py-2.5 border-1 border-[#D5D7DA]"
                  type="text"
                  id="Search-Destination"
                  name="destino"
                  placeholder="Selecciona tu destino"
                />
              </div>
            </div>

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

            <button className="bg-[#0086C9] text-white py-2.5 px-4 rounded-lg h-min">
              Buscar
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="max-w-7xl grow flex flex-col gap-6">
          {loading ? (
            <div className="flex justify-center py-8">
              <Spinner />
            </div>
          ) : (
            routes.map((route, index) => (
              <RouteCard route={route} key={index} />
            ))
          )}
        </div>
      </div>
    </>
  );
}
