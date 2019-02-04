import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ImageCarousel } from './image-carousel.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ImageCarouselService {

  constructor(
    private http: HttpClient
  ) { }

  getImagesCarousel(): Observable<ImageCarousel[]> {
    return this.http.get<ImageCarousel[]>('home-images');
  }
}
