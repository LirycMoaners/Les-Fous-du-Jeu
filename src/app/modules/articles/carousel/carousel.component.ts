import { Component, OnInit, ApplicationRef } from '@angular/core';
import { ImageCarouselService } from 'src/app/core/http-services/image-carousel.service';
import { ImageCarousel } from 'src/app/shared/models/image-carousel.model';
import { environment } from 'src/environments/environment';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  apiDomain: string;
  imagesCarousel: ImageCarousel[];
  imageCarouselIndex: number;

  constructor(
    private readonly imageCarouselService: ImageCarouselService,
    private readonly applicationRef: ApplicationRef
  ) { }

  ngOnInit() {
    this.apiDomain = environment.apiDomain;

    this.imageCarouselService.getImagesCarousel().pipe(
      flatMap((imagesCarousel: ImageCarousel[]) => {
        this.imagesCarousel = imagesCarousel;
        this.imageCarouselIndex = Math.floor(Math.random() * (this.imagesCarousel.length));

        return this.applicationRef.isStable;
      })
    ).subscribe(isStable => {
      if (isStable) {
        setInterval(() => {
          this.imageCarouselIndex = this.imagesCarousel[this.imageCarouselIndex + 1] ? this.imageCarouselIndex + 1 : 0;
        }, 5000);
      }
    });
  }

}
