export type RouteStop = {
    time: Date;
    location: string;
}

export type Route = {
    startTime: Date;
    endTime: Date;
    origin: string;
    destination: string;
    stops: RouteStop[];
    numberOfStops: number;
    price: number;
}