export type RouteStop = {
    time: Date;
    location: string;
}

export type Route = {
  id: string;
  name: string;
  firstStopName: string;
  lastStopName: string;
  startTime: string; // e.g. "06:00:00"
  endTime: string;   // e.g. "10:50:00"
  numberOfStops: number;
  price: number;
};