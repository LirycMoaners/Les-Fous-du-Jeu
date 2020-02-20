import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-dialog',
  templateUrl: 'contact-dialog.component.html',
  styleUrls: ['contact-dialog.component.scss']
})

export class ContactDialogComponent implements OnInit {
  public isVisible = false;
  public mailAddress: string;

  constructor(
    public dialogRef: MatDialogRef<ContactDialogComponent>
  ) { }

  ngOnInit() {
    this.mailAddress = environment.mailAddress;
  }

  openFacebookPage(): void {
    window.open(environment.facebookURL, '_blank');
  }
}
