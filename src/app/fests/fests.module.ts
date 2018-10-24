import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FestsRoutingModule, routedComponent } from './fests-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FestsRoutingModule
  ],
  declarations: [
    routedComponent
  ]
})
export class FestsModule { }
