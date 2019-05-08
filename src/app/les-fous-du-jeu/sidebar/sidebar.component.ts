import { Component, Output, EventEmitter } from '@angular/core';
import { DAYS_OF_WEEK } from 'angular-calendar';

@Component({
  selector: 'lfdj-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.scss']
})

export class SidebarComponent {
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  actualDate = new Date();
  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;
  weekendDays: number[] = [DAYS_OF_WEEK.FRIDAY, DAYS_OF_WEEK.SATURDAY];
  locale: string;

  constructor() { }

  changeMonth(isNext: boolean) {
    this.actualDate.setMonth(isNext ? this.actualDate.getMonth() + 1 : this.actualDate.getMonth() - 1);
  }
}
