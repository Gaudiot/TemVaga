import Grade from './grade';

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

  constructor() {
    this.clean();
  }

  clean(): void {
    this.cpf = '';
    this.name = '';
    this.photo = '';
    this.telephone = '';
    this.email = '';
    this.password = '';
    this.carLicensePlate = '';
    // Base grades for new user
    this.driverGrade = new Grade({ average: 5, evaluationQtt: 1 });
    this.passengerGrade = new Grade({ average: 5, evaluationQtt: 1 });
    this.registeredRides = [];
    this.requestedRides = [];
  }

  clone(): User {
    var user: User = new User();
    user.copyFrom(this);
    return user;
  }

  copyFrom(from: User): void {
    this.cpf = from.cpf;
    this.name = from.name;
    this.photo = from.photo;
    this.telephone = from.telephone;
    this.email = from.email;
    this.password = from.password;
    this.carLicensePlate = from.carLicensePlate;
    this.driverGrade = new Grade(from.driverGrade);
    this.passengerGrade = new Grade(from.passengerGrade);
    this.registeredRides = [...from.registeredRides];
    this.requestedRides = [...from.requestedRides];
  }
  // TODO: Implement evaluation for passengerGrade
  evaluateAsDriver(evaluationValue: number): number {
    return this.driverGrade.incrementGrade(evaluationValue);
  }

  evaluateAsPassenger(evaluationValue: number): number {
    return this.passengerGrade.incrementGrade(evaluationValue);
  }
}
