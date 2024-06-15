import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UnitsServiceService {
  constructor(private http: HttpClient) {}

  getUnits(): Observable<any> {
    return this.http
      .get<any>(
        'https://test-frontend-developer.s3.amazonaws.com/data/locations.json'
      )
      .pipe(
        catchError((err) => {
          console.error('Error fetching units:', err);

          return of(null);
        })
      );
  }
}
