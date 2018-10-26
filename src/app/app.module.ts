import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routedComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { MainbarComponent } from './mainbar/mainbar.component';
import { ArticleListComponent } from './home/article-list/article-list.component';
import { AgendaComponent } from './home/agenda/agenda.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SharedModule } from './shared/shared.module';
import { ImageCarouselService } from './shared/image-carousel/image-carousel.service';
import { ArticleService } from './shared/article/article.service';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    MainbarComponent,
    ArticleListComponent,
    AgendaComponent,
    FooterComponent,
    routedComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    SharedModule
  ],
  providers: [
    ImageCarouselService,
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
