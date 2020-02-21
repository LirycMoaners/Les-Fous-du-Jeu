import { Component, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { DAYS_OF_WEEK, CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';
import { CalendarEventService } from '../http-services/calendar-event.service';
import { ContactDialogComponent } from 'src/app/shared/components/contact-dialog/contact-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { EventDialogComponent } from '../agenda/event-dialog/event-dialog.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  @ViewChild('contact', {static: true}) contact: ContactDialogComponent;
  @Output() closeSidebar: EventEmitter<void> = new EventEmitter<void>();
  actualDate = new Date();
  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;
  weekendDays: number[] = [DAYS_OF_WEEK.FRIDAY, DAYS_OF_WEEK.SATURDAY];
  locale: string;
  calendarEvents: CalendarEvent[] = [];

  constructor(
    private readonly calendarEventService: CalendarEventService,
    private readonly dialog: MatDialog
  ) { }

  ngOnInit() {
    this.calendarEventService.getCalendarEvents().subscribe(calendarEvents => this.calendarEvents = calendarEvents);
  }

  changeMonth(isNext: boolean) {
    this.actualDate.setMonth(isNext ? this.actualDate.getMonth() + 1 : this.actualDate.getMonth() - 1);
  }

  openContact(): void {
    this.dialog.open(ContactDialogComponent);
  }

  onClickEvent(event: CalendarEvent) {
    this.dialog.open(EventDialogComponent, { maxWidth: 500, data: event });
  }

  onClickDay(day: CalendarMonthViewDay) {
    if (day.events.length) {
      this.onClickEvent(day.events[0]);
    }
  }
}
