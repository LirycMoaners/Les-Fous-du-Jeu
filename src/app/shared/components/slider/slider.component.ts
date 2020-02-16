import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() pictures: string[];

  public apiDomain: string;
  public isVisible = false;
  public currentPictureIndex: number;

  constructor() { }

  ngOnInit() {
    this.apiDomain = environment.apiDomain;
  }

  changePicture(event: MouseEvent, isNext: boolean) {
    event.stopPropagation();

    if (isNext) {
      if (this.currentPictureIndex < this.pictures.length - 1) {
        this.currentPictureIndex++;
      }
    } else {
      if (this.currentPictureIndex > 0) {
        this.currentPictureIndex--;
      }
    }
  }

  open(pictureIndex: number) {
    this.currentPictureIndex = pictureIndex;
    this.isVisible = true;
  }

  close() {
    this.isVisible = false;
  }
}
