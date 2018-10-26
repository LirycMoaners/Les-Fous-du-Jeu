import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ImageCarousel } from './image-carousel.model';

@Injectable()
export class ImageCarouselService {

  constructor() { }

  getImagesCarousel(): Observable<ImageCarousel[]> {
    return of([
      {
        path: '/assets/images/Fish.jpg',
        isActive: true
      },
      {
        path: '/assets/images/Neon.jpg',
        isActive: true
      },
      {
        path: '/assets/images/VR.jpg',
        isActive: true
      }
    ]);
  }
}
