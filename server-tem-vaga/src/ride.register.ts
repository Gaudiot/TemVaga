import Ride from '../../common/src/Ride/ride';
import Route from '../../common/src/Ride/route';

export default class RideRegister {
  rides: Ride[] = [];

  register(ride: Ride): Ride {
    return;
  }

  idNotRegistered(id: string): boolean {
    return;
  }

  update(ride: Ride): Ride {
    return;
  }

  getRide(id: string): Ride {
    return;
  }

  getRides(ids: string[]): Ride[] {
    return;
  }

  getAllRides(): Ride[] {
    return this.rides;
  }

  getFilteredRides(comparisonRide: Ride): Ride[] {
    var ridesReturn: Ride[] 
    for(let i = 0; i < this.rides.length; i++) {
      if(comparisonRide.route.departurePlace === this.rides[i].route.departurePlace && comparisonRide.route.arrivalPlace === this.rides[i].route.arrivalPlace) {
      if(comparisonRide.departureTime === this.rides[i].departureTime) {
        if(comparisonRide.price != null) {
          if(comparisonRide.price >= this.rides[i].price) {
            ridesReturn.push(this.rides[i])
          }
        } else {
          ridesReturn.push(this.rides[i])
        }
      } else if(comparisonRide.departureTime === null) {
        if(comparisonRide.price != null) {
          if(comparisonRide.price >= this.rides[i].price) {
            ridesReturn.push(this.rides[i])
          }
        } else {
          ridesReturn.push(this.rides[i])
        }
      }
    }
    }
    return ridesReturn;
  }

  delete(id: string): number {
    return;
  }

  createRequest(id: string, requesterCpf: string): boolean {
    return;
  }

  cancelRequest(id: string, requesterCpf: string): boolean {
    return;
  }

  acceptRequest(id: string, ownerCpf: string, acceptedCpf: string): boolean {
    return;
  }

  rejectRequest(id: string, ownerCpf: string, rejectedCpf: string): boolean {
    return;
  }

  createRoute(route: Route): Route {
    return;
  }

  updateRoute(route: Route): Route {
    return;
  }
}
