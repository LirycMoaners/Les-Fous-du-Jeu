import { NgModule } from '@angular/core';

import { ArticlesRoutingModule, routedComponents } from './articles-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  imports: [
    ArticlesRoutingModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    routedComponents,
    CarouselComponent
  ],
  providers: [],
})
export class ArticlesModule { }
