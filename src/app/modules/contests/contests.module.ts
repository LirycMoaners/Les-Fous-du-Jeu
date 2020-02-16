import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { ContestsRoutingModule, routedComponents } from './contests-routing.module';

@NgModule({
  imports: [
    ContestsRoutingModule,
    SharedModule
  ],
  exports: [],
  declarations: [routedComponents],
  providers: [],
})
export class ContestsModule { }
