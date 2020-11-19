interface IRoute {
    departurePlace: string;
    arrivalPlace: string;
    stops: string[];
  }
  
  export default class Route {
    departurePlace: string;
    arrivalPlace: string;
    stops: string[];
  
    constructor(departurePlace: string, arrivalPlace: string) {
      this.departurePlace = departurePlace;
      this.arrivalPlace = arrivalPlace;
      this.stops = [];
    }
  
    addStop(stop: string) {
      this.stops.push(stop);
    }
  
    removeStop(stop: string) {
      const stopIndex = this.stops.findIndex(s => s == stop);
      this.stops.splice(stopIndex, 1);
    }
  
    getDeparturePlace(): string {
      return this.departurePlace;
    }
  
    getArrivalPlace(): string {
      return this.arrivalPlace;
    }
  }