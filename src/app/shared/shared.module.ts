import { NgModule } from '@angular/core';
import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ]
})
export class SharedModule { }
