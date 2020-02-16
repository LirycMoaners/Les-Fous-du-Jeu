// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiDomain: 'http://lesfousdujeu.com',
  // apiDomain: 'http://localhost',
  apiPath: '/api/',
  // apiPath: '/drupal/',
  googleAPIURL: 'https://www.googleapis.com/calendar/v3/calendars/',
  googleAPIKey: 'AIzaSyAQy8kDJKrsyct0g7YnUSbtrXbQN0nLcxQ',
  googleCalendarID: '5lc6h8ltp9vla0b6llqmj4ss8s@group.calendar.google.com',
  mailAddress: 'lesfousdujeu@gmail.com',
  facebookURL: 'https://www.facebook.com/pg/LesFousDuJeu'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
