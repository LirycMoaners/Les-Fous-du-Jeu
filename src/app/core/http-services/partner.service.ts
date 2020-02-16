import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Partner } from 'src/app/shared/models/partner.model';

@Injectable()
export class PartnerService {
  private partners: Partner[];

  constructor(private httpClient: HttpClient) { }

  getPartners(): Observable<Partner[]> {
    return this.partners ? of(this.partners) : this.httpClient.get<Partner[]>('partners')
      .pipe(
        tap((partners) => this.partners = partners)
      );
  }
}
