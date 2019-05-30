import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Prize } from './prize.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PrizeService {
  constructor(
    private http: HttpClient
  ) { }

  getPrizes(ids: string): Observable<Prize[]> {
    return this.http.get<Prize[]>('prizes/' + ids).pipe(
      map(prizes => prizes.sort((prizeA, prizeB) => prizeA.order - prizeB.order))
    );
  }
}
