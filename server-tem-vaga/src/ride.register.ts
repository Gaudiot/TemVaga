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
    return;
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