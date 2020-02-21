import { Component, OnInit, ApplicationRef, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ImageCarouselService } from 'src/app/core/http-services/image-carousel.service';
import { ImageCarousel } from 'src/app/shared/models/image-carousel.model';
import { environment } from 'src/environments/environment';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {
  apiDomain: string;
  imagesCarousel: ImageCarousel[];
  imageCarouselIndex: number;
  carouselIntervalId: any;

  constructor(
    private readonly imageCarouselService: ImageCarouselService,
    private readonly applicationRef: ApplicationRef,
    private readonly cd: ChangeDetectorRef
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
        this.carouselIntervalId = setInterval(() => {
          this.imageCarouselIndex = this.imagesCarousel[this.imageCarouselIndex + 1] ? this.imageCarouselIndex + 1 : 0;
          this.cd.detectChanges();
        }, 5000);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.carouselIntervalId) {
      clearInterval(this.carouselIntervalId);
    }
  }
}
