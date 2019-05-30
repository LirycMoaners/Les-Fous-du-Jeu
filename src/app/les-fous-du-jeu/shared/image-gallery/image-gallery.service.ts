import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ImageGallery } from './image-gallery.model';

@Injectable()
export class ImageGalleryService {

  constructor(
    private http: HttpClient
  ) { }

  getImagesGallery(): Observable<ImageGallery[]> {
    return this.http.get<ImageGallery[]>('gallery-images');
  }
}
