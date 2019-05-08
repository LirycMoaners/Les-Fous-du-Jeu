import { Component, OnInit } from '@angular/core';
import { ImageCarouselService } from '../shared/image-carousel/image-carousel.service';
import { ImageCarousel } from '../shared/image-carousel/image-carousel.model';
import { ArticleService } from '../shared/article/article.service';
import { Article } from '../shared/article/article.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'lfdj-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imagesCarousel: ImageCarousel[];
  imageCarouselIndex: number;
  articles: Article[];
  apiDomain: string;

  constructor(
    private imageCarouselService: ImageCarouselService,
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.apiDomain = environment.apiDomain;
    this.imageCarouselService.getImagesCarousel()
      .subscribe((imagesCarousel: ImageCarousel[]) => {
        this.imagesCarousel = imagesCarousel;
        this.imageCarouselIndex = Math.floor(Math.random() * (this.imagesCarousel.length));

        setInterval(() => {
          this.imageCarouselIndex = this.imagesCarousel[this.imageCarouselIndex + 1] ? this.imageCarouselIndex + 1 : 0;
        }, 5000);
      });

    this.articleService.getArticles()
      .subscribe((articles: Article[]) => this.articles = articles);
  }
}
