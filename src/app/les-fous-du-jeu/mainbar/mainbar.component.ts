import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lfdj-mainbar',
  templateUrl: './mainbar.component.html',
  styleUrls: ['./mainbar.component.scss']
})
export class MainbarComponent implements OnInit {
  @Output() open: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
