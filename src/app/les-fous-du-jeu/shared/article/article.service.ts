import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from './article.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class ArticleService {

  constructor(
    private http: HttpClient
  ) { }

  getArticles(): Observable<Article[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get<Article[]>('http://localhost/api/articles?_format=json', {headers});
  }
}
