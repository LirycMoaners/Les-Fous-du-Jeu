import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactDialogComponent } from 'src/app/shared/components/contact-dialog/contact-dialog.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private readonly dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openContact(): void {
    this.dialog.open(ContactDialogComponent);
  }

}
