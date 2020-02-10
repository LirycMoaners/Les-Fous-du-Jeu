import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Content } from './content.model';

@Injectable()
export class ContentService {
  private contents: Content[];

  constructor(
    private http: HttpClient
  ) { }

  getContents(): Observable<Content[]> {
    return this.contents ?
      of(this.contents) :
      this.http.get<Content[]>('contents_title').pipe(tap(contents => this.contents = contents));
  }
}
