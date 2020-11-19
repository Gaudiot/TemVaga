import Grade from './grade';

export interface IUser {
  cpf: string;
  name: string;
  photo: string;
  telephone: string;
  email: string;
  password: string;
}

export default class User {
  cpf: string;
  name: string;
  photo: string;
  telephone: string;
  email: string;
  password: string;
  carLicensePlate: string;
  driverGrade: Grade;
  passengerGrade: Grade;
  registeredRides: string[];
  requestedRides: string[];

  constructor(
    cpf: string,
    name: string,
    photo: string,
    telephone: string,
    email: string,
    password: string
  ) {
    this.cpf = cpf;
    this.name = name;
    this.photo = photo;
    this.telephone = telephone;
    this.email = email;
    this.password = password;
    this.carLicensePlate = '';
    // Base grades for new user
    this.driverGrade = new Grade({ average: 5, evaluationQtt: 1 });
    this.passengerGrade = new Grade({ average: 5, evaluationQtt: 1 });
    this.registeredRides = [];
    this.requestedRides = [];
  }
  // TODO: Implement evaluation for passengerGrade
  evaluate(evaluationValue: number): number {
    return this.driverGrade.incrementGrade(evaluationValue);
  }

  insertRegisteredRide(rideId: string): void {
    this.registeredRides.push(rideId);
  }

  setCarLicensePlate(licensePlate: string): void {
    this.carLicensePlate = licensePlate;
  }
}
