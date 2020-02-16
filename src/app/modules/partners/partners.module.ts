import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { routedComponents, PartnersRoutingModule } from './partners-routing.module';

@NgModule({
  imports: [
    PartnersRoutingModule,
    SharedModule
  ],
  exports: [],
  declarations: [routedComponents],
  providers: []
})
export class PartnersModule { }
