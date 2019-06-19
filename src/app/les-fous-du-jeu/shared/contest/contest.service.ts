import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Contest } from './contest.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContestService {
  private contests: Contest[];

  constructor(
    private http: HttpClient
  ) { }

  getContests(): Observable<Contest[]> {
    return this.contests ? of(this.contests) : this.http.get<Contest[]>('contests')
      .pipe(
        tap((contests) => this.contests = contests)
      );
  }

  getContest(id: string): Observable<Contest> {
    return this.http.get<Contest[]>('contests/' + id).pipe(
      map((contests) => {
        contests[0].picturesSmall = (<string> <unknown> contests[0]['picturesSmall']).split(', ');
        contests[0].picturesLarge = (<string> <unknown> contests[0]['picturesLarge']).split(', ');
        return contests[0];
      })
    );
  }
}
