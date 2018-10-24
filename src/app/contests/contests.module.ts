import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContestsRoutingModule, routedComponent } from './contests-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ContestsRoutingModule,
    SharedModule
  ],
  declarations: [
    routedComponent
  ]
})
export class ContestsModule { }
