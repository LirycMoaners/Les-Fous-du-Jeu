import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CalendarEvent } from 'calendar-utils';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class CalendarEventService {
  private readonly url = environment.googleAPIURL + environment.googleCalendarID + '/events?key=' + environment.googleAPIKey
    + '&orderBy=startTime&singleEvents=true&timeMin=';

  constructor(private httpClient: HttpClient) { }

  public getCalendarEvents(): Observable<CalendarEvent[]> {
    const actualDate = new Date();
    const startDate = (new Date(actualDate.getFullYear(), actualDate.getMonth(), 1)).toISOString();
    return this.httpClient.get(this.url + startDate).pipe(
      map((result: any) => {
        const calendarEvents: CalendarEvent[] = [];
        for (const item of (result.items as any[])) {
          const allDay = !item.start.dateTime;
          const startDateString = allDay ? item.start.date as string : item.start.dateTime as string;
          const endDateString = allDay ? item.end.date as string : item.end.dateTime as string;
          calendarEvents.push({
            start: allDay
              ? new Date(
                Number(startDateString.substring(0, 4)),
                Number(startDateString.substring(5, 7)) - 1,
                Number(startDateString.substring(8, 10)))
              : new Date(startDateString),
            end: allDay
              ? new Date(
                Number(endDateString.substring(0, 4)),
                Number(endDateString.substring(5, 7)) - 1,
                Number(endDateString.substring(8, 10)) - 1)
              : new Date(endDateString),
            title: item.summary,
            color: {primary: '#9c27b0', secondary: '#b2ff59'},
            allDay: allDay
          });
        }
        return calendarEvents;
      })
    )
  }
}
