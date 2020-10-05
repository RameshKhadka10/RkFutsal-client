import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {Users} from '../models/users';

import { catchError, map } from 'rxjs/operators';

const httpOptions= {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};



@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private BASE_URL= 'http://localhost:8080/api/reservation/';

  constructor(private http : HttpClient) { }


  makeReservations(reserve): Observable<any>{
    return this.http.post(this.BASE_URL + 'reserve',{
      startingTime: reserve.startingTime,
      endTime: reserve.endTime,
      date: reserve.date,
      username: reserve.username
    });
  }
  
  getReservationByUsername(username: string): Observable<any>{
    return this.http.get(`${this.BASE_URL}reserve/${username}`, httpOptions) ;
  }

  getAllReservations(): Observable<Users[]>{
    return this.http.get<Users[]>(`${this.BASE_URL}all`).pipe(
      map(data => data.map(data => new Users().deserialize(data)))
      );
    }

    public getUser(username: string): Observable<Users> {
      return this.http.get<Users>(`${this.BASE_URL}reserve/${username}`).pipe(
        map(data => new Users().deserialize(data)),
        catchError(() => throwError('User not found'))
      );
    }
  


  
}
