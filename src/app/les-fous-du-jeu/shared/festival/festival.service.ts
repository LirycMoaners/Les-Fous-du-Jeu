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
        tap((festivals) => this.festivals = festivals)
      );
  }

  getFestival(id: string): Observable<Festival> {
    return this.http.get<Festival[]>('festivals/' + id).pipe(
      map((festivals) => {
        festivals[0].picturesSmall = (<string> <unknown> festivals[0]['picturesSmall']).split(', ');
        festivals[0].picturesLarge = (<string> <unknown> festivals[0]['picturesLarge']).split(', ');
        return festivals[0];
      })
    );
  }
}
