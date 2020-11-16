import {v4 as uuid} from 'uuid'
import User from '../User/user';
import Route from './route';
import Seats from './seats';
import { IPlace } from './route';

interface IRide{
    price: number;
    places: number;
    isPrivate: boolean;
    departureTime: Date;
    route: Route;
}

const baseIPlace:IPlace = {street: '', number: 0};

export default class ride{
    id: string;
    driver: User;
    price: number;
    isPrivate: boolean;
    departureTime: Date;
    route: Route;
    seats: Seats;

    constructor(driver: User, {price, places, isPrivate, departureTime}: IRide){
        this.id = uuid();
        this.driver = driver.clone();
        this.price = price;
        this.route = new Route({departurePlace: baseIPlace, arrivalPlace: baseIPlace});
        this.seats = new Seats(places);
        this.isPrivate = isPrivate;
        this.departureTime = departureTime;
    }

    changePrivacy(){
        this.isPrivate = !this.isPrivate;
    }
}