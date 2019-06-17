import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'lfdj-contact-dialog',
  templateUrl: 'contact-dialog.component.html',
  styleUrls: ['contact-dialog.component.scss']
})

export class ContactDialogComponent implements OnInit {
  public isVisible = false;
  public mailAddress: string;

  constructor() { }

  ngOnInit() {
    this.mailAddress = environment.mailAddress;
  }

  open() {
    this.isVisible = true;
  }

  close() {
    this.isVisible = false;
  }

  openFacebookPage() {
    window.open(environment.facebookURL, '_blank');
  }
}
