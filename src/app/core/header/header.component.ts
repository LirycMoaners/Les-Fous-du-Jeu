import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactDialogComponent } from 'src/app/shared/components/contact-dialog/contact-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() openSidebar: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private readonly dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openContact(): void {
    this.dialog.open(ContactDialogComponent);
  }

}
