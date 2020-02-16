import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Article } from 'src/app/shared/models/article.model';
import { ArticleService } from 'src/app/core/http-services/article.service';

@Component({
  selector: 'app-article',
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
