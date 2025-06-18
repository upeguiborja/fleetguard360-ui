import { Route } from "@/types";
import Button from "./Button";
import { useState } from "react";
import api from "@/utils/api";
import { toast } from "sonner";

type RouteCardProps = {
  route: Route;
  onSuccessReservation?: (confirmationNumber: string) => void;
};

const formatTime = (time: string) => time.slice(0, 5);

const RouteCard: React.FunctionComponent<RouteCardProps> = ({ route, onSuccessReservation }) => {
  const [isLoading, setIsLoading] = useState(false);

  async function handleReservation(routeId: string) {
    setIsLoading(true);
    try {
      const result = await api.post<{ confirmationNumber: string }>("/fg-api/reservations", { routeId });
      if (onSuccessReservation) onSuccessReservation(result.confirmationNumber);
    } catch {
      toast.error("No se pudo realizar la reserva. Intenta de nuevo.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="rounded-lg overflow-hidden flex bg-white">
      <div className="grow p-4 flex items-center gap-4">
        <div>
          <p className="text-lg/7 font-bold">{formatTime(route.startTime)}</p>
          <p className="text-sm/4.5">{route.firstStopName}</p>
        </div>

        <span className="grow border-b-1 border-b-[#E9EAEB]"></span>

        <div className="text-xs/4.5 text-[#535862]">
          {route.numberOfStops > 1
            ? `${route.numberOfStops} Paradas`
            : "Directo"}
        </div>

        <span className="grow border-b-1 border-b-[#E9EAEB]"></span>

        <div className="text-right">
          <p className="text-lg/7 font-bold">{formatTime(route.endTime)}</p>
          <p className="text-sm/4.5">{route.lastStopName}</p>
        </div>
      </div>
      <div className="bg-[#F5FAFF] py-4 pr-4 pl-6 flex gap-3 items-center">
        <div className="text-right">
          <p className="text-xs/4.5">Precio</p>
          <p className="text-base/6 font-semibold mt-[-4px]">
            {route.price.toLocaleString("es-CO", {
              style: "currency",
              currency: "COP",
              maximumFractionDigits: 0,
            })}
          </p>
        </div>

        <Button label="Reservar" isLoading={isLoading} onClick={() => handleReservation(route.id)} />
      </div>
    </div>
  );
};

export default RouteCard;
