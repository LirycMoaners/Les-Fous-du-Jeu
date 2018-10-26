import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/shared/article/article.model';

@Component({
  selector: 'lfdj-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  @Input() articles: Article[];

  constructor() { }

  ngOnInit() {
  }

}
