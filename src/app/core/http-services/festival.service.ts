import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Festival } from 'src/app/shared/models/festival.model';

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
        festivals[0].picturesSmall = ((festivals[0] as any).picturesSmall as string).split(', ');
        festivals[0].picturesLarge = ((festivals[0] as any).picturesLarge as string).split(', ');
        return festivals[0];
      })
    );
  }
}
