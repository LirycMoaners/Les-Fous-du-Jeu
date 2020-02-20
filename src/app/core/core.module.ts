import { NgModule } from '@angular/core';
import { ArticleService } from './http-services/article.service';
import { CalendarEventService } from './http-services/calendar-event.service';
import { ContentService } from './http-services/content.service';
import { ContestService } from './http-services/contest.service';
import { ImageCarouselService } from './http-services/image-carousel.service';
import { ImageGalleryService } from './http-services/image-gallery.service';
import { PartnerService } from './http-services/partner.service';
import { PrizeService } from './http-services/prize.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LFDJHttpInterceptor } from './interceptors/lfdj-http-interceptor';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AgendaComponent } from './agenda/agenda.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FestivalService } from './http-services/festival.service';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ContactDialogComponent } from '../shared/components/contact-dialog/contact-dialog.component';

@NgModule({
  imports: [
    RouterModule,
    SharedModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    AgendaComponent,
    SidebarComponent
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    AgendaComponent,
    SidebarComponent
  ],
  entryComponents: [
    ContactDialogComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: LFDJHttpInterceptor, multi: true
    },
    ArticleService,
    CalendarEventService,
    ContentService,
    ContestService,
    FestivalService,
    ImageCarouselService,
    ImageGalleryService,
    PartnerService,
    PrizeService
  ],
})
export class CoreModule { }
