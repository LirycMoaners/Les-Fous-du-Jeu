import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { ContentService } from 'src/app/core/http-services/content.service';
import { Content } from 'src/app/shared/models/content.model';
import { ImageGallery } from 'src/app/shared/models/image-gallery.model';
import { ImageGalleryService } from 'src/app/core/http-services/image-gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public pictures: ImageGallery[];
  public picturesLarge: string[];
  public apiDomain: string;
  public contents: Content[];
  public filter$: BehaviorSubject<{pageNumber: number, contentId: string}> =
    new BehaviorSubject<{pageNumber: number, contentId: string}>({pageNumber: 0, contentId: null});

  constructor(
    private readonly imageGalleryService: ImageGalleryService,
    private readonly contentService: ContentService
  ) { }

  ngOnInit() {
    this.apiDomain = environment.apiDomain;
    this.filter$.pipe(
      flatMap(filter => this.imageGalleryService.getImagesGallery(filter.pageNumber, filter.contentId))
    ).subscribe(pictures => {
      this.pictures = pictures;
      this.picturesLarge = this.pictures.map(picture => picture.pictureLarge);
    });
    this.contentService.getContents().subscribe(contents => this.contents = contents);
  }

  public changeContentId(contentId: string): void {
    this.filter$.next({pageNumber: 0, contentId});
  }

  public changePageNumber(pageNumber: number): void {
    this.filter$.next({pageNumber, contentId: this.filter$.value.contentId});
  }
}
