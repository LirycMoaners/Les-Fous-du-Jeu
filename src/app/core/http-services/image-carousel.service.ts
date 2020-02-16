import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ImageCarousel } from 'src/app/shared/models/image-carousel.model';

@Injectable()
export class ImageCarouselService {

  constructor(
    private http: HttpClient
  ) { }

  getImagesCarousel(): Observable<ImageCarousel[]> {
    return this.http.get<ImageCarousel[]>('home-images');
  }
}
