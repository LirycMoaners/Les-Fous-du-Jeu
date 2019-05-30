import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { DAYS_OF_WEEK, CalendarEvent } from 'angular-calendar';
import { CalendarEventService } from '../shared/calendar-event/calendar-event.service';

@Component({
  selector: 'lfdj-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  actualDate = new Date();
  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;
  weekendDays: number[] = [DAYS_OF_WEEK.FRIDAY, DAYS_OF_WEEK.SATURDAY];
  locale: string;
  calendarEvents: CalendarEvent[] = [];

  constructor(
    private readonly calendarEventService: CalendarEventService
  ) { }

  ngOnInit() {
    this.calendarEventService.getCalendarEvents().subscribe(calendarEvents => this.calendarEvents = calendarEvents);
  }

  changeMonth(isNext: boolean) {
    this.actualDate.setMonth(isNext ? this.actualDate.getMonth() + 1 : this.actualDate.getMonth() - 1);
  }
}
