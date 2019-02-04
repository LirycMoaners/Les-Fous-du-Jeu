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
    return this.http.get<Article[]>('articles');
  }
}
