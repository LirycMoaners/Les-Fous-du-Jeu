import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContestsRoutingModule, routedComponent } from './contests-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ContestsRoutingModule
  ],
  declarations: [
    routedComponent
  ]
})
export class ContestsModule { }
