import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { DAYS_OF_WEEK, CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';
import { CalendarEventService } from '../http-services/calendar-event.service';
import { EventDialogComponent } from './event-dialog/event-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {
  actualDate = new Date();
  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;
  weekendDays: number[] = [DAYS_OF_WEEK.FRIDAY, DAYS_OF_WEEK.SATURDAY];
  locale: string;
  isAgendaVisible = false;
  calendarEvents: CalendarEvent[] = [];

  constructor(
    private eRef: ElementRef,
    private readonly dialog: MatDialog,
    private readonly calendarEventService: CalendarEventService
  ) { }

  ngOnInit() {
    this.calendarEventService.getCalendarEvents().subscribe(calendarEvents => this.calendarEvents = calendarEvents);
  }

  @HostListener('document:click', ['$event']) clickedOutside(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isAgendaVisible = false;
    }
  }

  changeMonth(isNext: boolean) {
    this.actualDate.setMonth(isNext ? this.actualDate.getMonth() + 1 : this.actualDate.getMonth() - 1);
  }

  switchAgendaVisibility() {
    this.isAgendaVisible = !this.isAgendaVisible;
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
