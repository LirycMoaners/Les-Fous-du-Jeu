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
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get<ImageCarousel[]>('http://localhost/api/home-images?_format=json',
      {headers});
  }
}
