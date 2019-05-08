import { NgModule } from '@angular/core';

import { ContactComponent } from './contact/contact.component';
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

@NgModule({
  declarations: [
    ContactComponent,
    MainbarComponent,
    SidebarComponent,
    AgendaComponent,
    FooterComponent,
    routedComponents,
    SliderComponent
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
    FestivalService
  ]
})
export class LesFousDuJeuModule { }
