import { Route } from "./types";
import { addHours, addMinutes, setHours, setMinutes } from "date-fns";

const todayAtHours = (hours: number, minutes: number) => {
  const today = new Date();
  return setMinutes(setHours(today, hours), minutes);
};

export const mockRoutes: Route[] = [
  {
    startTime: todayAtHours(6, 0),
    endTime: addHours(addMinutes(todayAtHours(6, 0), 50), 4),
    origin: "Medellín",
    destination: "Manizales",
    price: 71000,
    numberOfStops: 5,
    stops: [],
  },
  {
    startTime: todayAtHours(9, 0),
    endTime: addHours(addMinutes(todayAtHours(9, 0), 50), 4),
    origin: "Medellín",
    destination: "Manizales",
    price: 71000,
    numberOfStops: 5,
    stops: [],
  },
  {
    startTime: todayAtHours(12, 0),
    endTime: addHours(addMinutes(todayAtHours(12, 0), 50), 4),
    origin: "Medellín",
    destination: "Manizales",
    price: 71000,
    numberOfStops: 5,
    stops: [],
  },
  {
    startTime: todayAtHours(15, 0),
    endTime: addHours(addMinutes(todayAtHours(15, 0), 50), 4),
    origin: "Medellín",
    destination: "Manizales",
    price: 71000,
    numberOfStops: 5,
    stops: [],
  },
  {
    startTime: todayAtHours(7, 0),
    endTime: addHours(addMinutes(todayAtHours(7, 0), 10), 6),
    origin: "Medellín",
    destination: "Armenia",
    price: 78000,
    numberOfStops: 4,
    stops: [],
  },
  {
    startTime: todayAtHours(11, 0),
    endTime: addHours(addMinutes(todayAtHours(11, 0), 10), 6),
    origin: "Medellín",
    destination: "Armenia",
    price: 78000,
    numberOfStops: 4,
    stops: [],
  },
  {
    startTime: todayAtHours(14, 0),
    endTime: addHours(addMinutes(todayAtHours(14, 0), 10), 6),
    origin: "Medellín",
    destination: "Armenia",
    price: 78000,
    numberOfStops: 4,
    stops: [],
  },
].sort((a, b) => a.startTime.getTime() - b.startTime.getTime());
