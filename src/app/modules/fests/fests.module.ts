import { NgModule } from '@angular/core';
import { FestsRoutingModule, routedComponents } from './fests-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    FestsRoutingModule,
    SharedModule
  ],
  exports: [],
  declarations: [routedComponents],
  providers: [],
})
export class FestsModule { }
