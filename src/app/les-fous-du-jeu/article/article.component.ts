import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../shared/article/article.service';
import { Article } from '../shared/article/article.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'lfdj-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  public apiDomain: string;
  public article: Article;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private router: Router
  ) { }

  ngOnInit() {
    this.apiDomain = environment.apiDomain;
    const articleId: string = this.route.snapshot.paramMap.get('id');

    if (articleId) {
      this.articleService.getArticle(articleId).subscribe((article: Article) => this.article = article);
    } else {
      this.router.navigate(['/home']);
    }
  }
}
