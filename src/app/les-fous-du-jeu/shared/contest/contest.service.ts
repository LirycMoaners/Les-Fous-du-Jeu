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
        map((contests) => {
          for (const contest of contests) {
            contest.picturesSmall = (<string> <unknown> contest['picturesSmall']).split(', ');
            contest.picturesLarge = (<string> <unknown> contest['picturesLarge']).split(', ');
          }
          return contests;
        }),
        tap((contests) => this.contests = contests)
      );
  }

  getContest(id: string): Observable<Contest> {
    return this.getContests().pipe(map(contests => contests.find(contest => contest.id === id)));
  }
}
