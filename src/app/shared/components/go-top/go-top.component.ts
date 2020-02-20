import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-go-top',
  templateUrl: './go-top.component.html',
  styleUrls: ['./go-top.component.scss']
})
export class GoTopComponent implements OnInit {
  @Input() elementRef: ElementRef;
  isArrowVisible = false;

  constructor() { }

  ngOnInit(): void {
    this.elementRef.nativeElement.addEventListener(
      'scroll',
      () => this.isArrowVisible = this.elementRef.nativeElement.scrollTop >= 50
    );
  }

  scrollTop(): void {
    (this.elementRef.nativeElement as HTMLElement).scrollTo({top: 0, behavior: 'smooth'});
  }
}
