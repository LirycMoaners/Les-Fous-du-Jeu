import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Article } from 'src/app/shared/models/article.model';
import { ArticleService } from 'src/app/core/http-services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles: Article[];
  apiDomain: string;

  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.apiDomain = environment.apiDomain;

    this.articleService.getArticles()
      .subscribe((articles: Article[]) => this.articles = articles);
  }
}
