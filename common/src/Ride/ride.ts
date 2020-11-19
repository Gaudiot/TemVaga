  
import { v4 as uuid } from 'uuid';
import Route from './route';
import Seats from './seats';

interface IRide {
  departureTime: Date;
  price: number;
  isPrivate: boolean;
  seats: number;
  //route: Route;
}

export default class Ride {
  id: string;
  driver: string;
  departureTime: Date;
  price: number;
  isPrivate: boolean;
  seats: Seats;
  route: Route;

  constructor(
    driver: string,
    { departureTime, price, isPrivate, seats }: IRide,
    departurePlace: string,
    arrivalPlace: string
  ) {
    this.id = uuid();
    this.driver = driver;
    this.departureTime = departureTime;
    this.price = price;
    this.isPrivate = isPrivate;
    this.seats = new Seats(seats);
    this.route = new Route(departurePlace, arrivalPlace);
  }

  changePrivacy() {
    this.isPrivate = !this.isPrivate;
  }

  getDeparturePlace(): string {
    return this.route.getDeparturePlace();
  }

  getArrivalPlace(): string {
    return this.route.getArrivalPlace();
  }
}