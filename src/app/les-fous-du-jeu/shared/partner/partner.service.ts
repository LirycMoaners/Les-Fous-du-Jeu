import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Partner } from './partner.model';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

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
