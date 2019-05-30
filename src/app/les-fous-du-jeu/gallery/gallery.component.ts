import { Component, OnInit } from '@angular/core';
import { ImageGalleryService } from '../shared/image-gallery/image-gallery.service';
import { environment } from 'src/environments/environment';
import { ImageGallery } from '../shared/image-gallery/image-gallery.model';

@Component({
  selector: 'lfdj-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public pictures: ImageGallery[];
  public picturesLarge: string[];
  public apiDomain: string;

  constructor(
    private readonly imageGalleryService: ImageGalleryService
  ) { }

  ngOnInit() {
    this.apiDomain = environment.apiDomain;
    this.imageGalleryService.getImagesGallery().subscribe(pictures => {
      this.pictures = pictures;
      this.picturesLarge = this.pictures.map(picture => picture.pictureBig);
    });
  }
}
