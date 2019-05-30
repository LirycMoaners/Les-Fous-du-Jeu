import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lfdj-contact-dialog',
  templateUrl: 'contact-dialog.component.html',
  styleUrls: ['contact-dialog.component.scss']
})

export class ContactDialogComponent implements OnInit {
  public isVisible = false;

  constructor() { }

  ngOnInit() { }

  open() {
    this.isVisible = true;
  }

  close() {
    this.isVisible = false;
  }
}
