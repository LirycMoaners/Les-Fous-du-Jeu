import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Festival } from './festival.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FestivalService {

  constructor(
    private http: HttpClient
  ) { }

  getFestivals(): Observable<Festival[]> {
    return this.http.get<Festival[]>('festivals');
  }
}
