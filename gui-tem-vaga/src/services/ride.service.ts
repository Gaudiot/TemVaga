import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';

import Ride from '../../../common/src/Ride/ride';
import Route from '../../../common/src/Ride/route';

@Injectable()
export class RideService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private baseURL = 'http://localhost:3000/rideApi';

  constructor(private http: HttpClient) {}

  create(ride: Ride): Observable<Ride> {
    return;
  }

  update(ride: Ride): Observable<Ride> {
    return;
  }

  getRide(id: string): Observable<Ride> {
    return;
  }

  getRides(ids: string[]): Observable<Ride[]> {
    return;
  }

  getAllRides(): Observable<Ride[]> {
    return this.http.get<Ride[]>(this.baseURL);
                    //.map(res=>res.json())
                    //.catch(err=> Observable.throw(err.message));
  }

  getFilteredRides(comparisonRide: Ride): Observable<Ride[]> {
    return;
  }

  delete(id: string): Observable<number> {
    return;
  }

  createRequest(id: string, requesterCpf: string): Observable<boolean> {
    return;
  }

  cancelRequest(id: string, requesterCpf: string): Observable<boolean> {
    return;
  }

  acceptRequest(
    id: string,
    ownerCpf: string,
    acceptedCpf: string
  ): Observable<boolean> {
    return;
  }

  rejectRequest(
    id: string,
    ownerCpf: string,
    rejectedCpf: string
  ): Observable<boolean> {
    return;
  }

  createRoute(route: Route): Observable<Route> {
    return;
  }

  updateRoute(route: Route): Observable<Route> {
    return;
  }
}
