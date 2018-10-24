import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FestsRoutingModule, routedComponent } from './fests-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FestsRoutingModule,
    SharedModule
  ],
  declarations: [
    routedComponent
  ]
})
export class FestsModule { }
