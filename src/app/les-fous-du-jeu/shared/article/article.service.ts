import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from './article.model';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class ArticleService {
  private articles: Article[];

  constructor(
    private http: HttpClient
  ) { }

  getArticles(): Observable<Article[]> {
    return this.articles ? of(this.articles) : this.http.get<Article[]>('articles').pipe(tap(articles => this.articles = articles));
  }

  getArticle(id: string): Observable<Article> {
    return this.getArticles().pipe(map(articles => articles.find(article => article.id === id)));
  }
}
