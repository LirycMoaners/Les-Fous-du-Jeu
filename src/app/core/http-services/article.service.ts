import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { Article } from 'src/app/shared/models/article.model';

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
    return this.http.get<Article[]>('articles/' + id).pipe(
      map(articles => articles[0])
    );
  }
}
