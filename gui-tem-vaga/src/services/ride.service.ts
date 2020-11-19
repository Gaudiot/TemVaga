import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map, catchError} from 'rxjs/operators';

import Ride from '../../../common/src/Ride/ride';
import Route from '../../../common/src/Ride/route';

@Injectable()
export class RideService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private baseURL = 'http://localhost:3000/rideApi';

  constructor(private http: HttpClient) {}

  create(ride: Ride): Observable<Ride> {
    return (this.http
      .post<any>(`${this.baseURL}/ride`, ride, { headers: this.headers })
      .pipe(retry(2), map((res) => {
          if (res.success) return JSON.parse(res.ride);
          return null;
        })
      )
    );
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
    return this.http.get<Ride[]>(`${this.baseURL}/ride/all`)
                    .pipe(
                      retry(2)
                    );
  }

  getFilteredRides(comparisonRide: Ride): Observable<Ride[]> {
   /* let params = new URLSearchParams();
    params.set('parametro1', comparisonRide);
    let requestOptions = new RequestOptions({params});
    return this.http.get<Ride[]>(this.baseURL + "/ride/filtered", params)
              //.map((res))
              .pipe(
                retry(2),
                map((r: Ride[]) => {
                  return r
                })
              );*/
              return
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
