import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CalendarEvent } from 'calendar-utils';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class CalendarEventService {
  private readonly url = environment.facebookAPIURL + '/events?access_token=' + environment.facebookAPIKey;

  constructor(private httpClient: HttpClient) { }

  public getCalendarEvents(): Observable<CalendarEvent[]> {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return this.httpClient.get(this.url).pipe(
      map((result: any) => {
        const calendarEvents: CalendarEvent[] = [];
        for (const item of (result.data as any[])) {
          const allDay = !item.start_time;
          calendarEvents.push({
            start: new Date(item.start_time),
            end: new Date(item.end_time),
            title: item.name,
            color: {primary: '#9c27b0', secondary: '#b2ff59'},
            allDay,
            meta: {
              description: item.description.replace(urlRegex, (url: string) => {
                  return '<a href="' + url + '">' + url + '</a>';
              }),
              place: item.place.name,
              street: item.place.location?.street,
              city: item.place.location?.city,
              zip: item.place.location?.zip,
              map: encodeURI('https://www.google.com/maps/search/?api=1&query=' + item.place.name)
            },
            id: item.id
          });
        }
        return calendarEvents;
      })
    );
  }
}
