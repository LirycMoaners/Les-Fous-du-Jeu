import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImageGallery } from './image-gallery.model';

@Injectable()
export class ImageGalleryService {

  constructor(
    private http: HttpClient
  ) { }

  getImagesGallery(pageNumber: number, contentId?: string): Observable<ImageGallery[]> {
    const url = 'gallery-images?page=' + pageNumber + '&content_id=' + (contentId ? contentId : '');
    return this.http.get<ImageGallery[]>(url);
  }
}
