import { NgModule } from '@angular/core';
import { MatMenuModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    MatMenuModule,
    MatButtonModule
  ],
  exports: [
    MatMenuModule,
    MatButtonModule
  ]
})
export class SharedModule { }
