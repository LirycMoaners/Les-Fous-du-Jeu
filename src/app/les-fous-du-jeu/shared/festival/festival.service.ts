import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Festival } from './festival.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FestivalService {
  private festivals: Festival[];

  constructor(
    private http: HttpClient
  ) { }

  getFestivals(): Observable<Festival[]> {
    return this.festivals ? of(this.festivals) : this.http.get<Festival[]>('festivals')
      .pipe(
        map((festivals) => {
          for (const festival of festivals) {
            festival.picturesSmall = (<string> <unknown> festival['picturesSmall']).split(', ');
            festival.picturesLarge = (<string> <unknown> festival['picturesLarge']).split(', ');
          }
          return festivals;
        }),
        tap((festivals) => this.festivals = festivals)
      );
  }

  getFestival(id: string): Observable<Festival> {
    return this.getFestivals().pipe(map(festivals => festivals.find(festival => festival.id === id)));
  }
}
