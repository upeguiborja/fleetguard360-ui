import { Route } from "@/types";
import { format } from "date-fns";
import Button from "./Button";

type RouteCardProps = {
  route: Route;
};

const RouteCard: React.FunctionComponent<RouteCardProps> = ({ route }) => {
  return (
    <div className="rounded-lg overflow-hidden flex bg-white">
      <div className="grow p-4 flex items-center gap-4">
        <div>
          <p className="text-lg/7 font-bold">
            {format(route.startTime, "hh:mm aa")}
          </p>
          <p className="text-sm/4.5">{route.origin}</p>
          <p className="text-xs">{format(route.startTime, "MMMM dd")}</p>
        </div>

        <span className="grow border-b-1 border-b-[#E9EAEB]"></span>

        <div className="text-xs/4.5 text-[#535862]">
          {route.numberOfStops > 1 ? `${route.numberOfStops} Paradas` : "Directo"}
        </div>

        <span className="grow border-b-1 border-b-[#E9EAEB]"></span>

        <div>
          <p className="text-lg/7 font-bold">
            {format(route.endTime, "hh:mm aa")}
          </p>
          <p className="text-sm/4.5">{route.destination}</p>
          <p className="text-xs">{format(route.endTime, "MMMM dd")}</p>
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


        <Button label="Reservar" />
      </div>
    </div>
  );
};

export default RouteCard;
