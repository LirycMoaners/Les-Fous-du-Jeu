import { NgModule } from '@angular/core';
import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatDividerModule, MatBadgeModule, MatSidenavModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatBadgeModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatBadgeModule,
    MatSidenavModule
  ]
})
export class SharedModule { }
