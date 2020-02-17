import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Contest } from 'src/app/shared/models/contest.model';

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
        contests[0].picturesSmall = ((contests[0] as any).picturesSmall as string).split(', ');
        contests[0].picturesLarge = ((contests[0] as any).picturesLarge as string).split(', ');
        return contests[0];
      })
    );
  }
}
