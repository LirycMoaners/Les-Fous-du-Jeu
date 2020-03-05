import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Injectable()
export class LoaderService {
  requestCounter: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  isLoaderVisible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    this.requestCounter.pipe(debounceTime(200)).subscribe(counter => {
      if (this.isLoaderVisible.getValue() !== counter > 0) {
        this.isLoaderVisible.next(counter > 0);
      }
    });
  }
}
