import { NgModule } from '@angular/core';

import { MainbarComponent } from './mainbar/mainbar.component';
import { AgendaComponent } from './home/agenda/agenda.component';
import { FooterComponent } from './footer/footer.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SharedModule } from '../shared/shared.module';

import { ImageCarouselService } from './shared/image-carousel/image-carousel.service';
import { ArticleService } from './shared/article/article.service';
import { routedComponents, LesFousDuJeuRoutingModule } from './les-fous-du-jeu-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LFDJHttpInterceptor } from './shared/interceptors/lfdj-http-interceptor';
import { FestivalService } from './shared/festival/festival.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SliderComponent } from './shared/slider/slider.component';
import { CalendarEventService } from './shared/calendar-event/calendar-event.service';
import { ContactDialogComponent } from './shared/contact-dialog/contact-dialog.component';
import { ImageGalleryService } from './shared/image-gallery/image-gallery.service';
import { ContestService } from './shared/contest/contest.service';
import { PrizeService } from './shared/contest/prize/prize.service';
import { PartnerService } from './shared/partner/partner.service';

@NgModule({
  declarations: [
    MainbarComponent,
    SidebarComponent,
    AgendaComponent,
    FooterComponent,
    routedComponents,
    SliderComponent,
    ContactDialogComponent
  ],
  imports: [
    LesFousDuJeuRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: LFDJHttpInterceptor, multi: true
    },
    ImageCarouselService,
    ArticleService,
    FestivalService,
    ContestService,
    CalendarEventService,
    ImageGalleryService,
    PrizeService,
    PartnerService
  ]
})
export class LesFousDuJeuModule { }
