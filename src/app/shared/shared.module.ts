import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ContactDialogComponent } from './components/contact-dialog/contact-dialog.component';
import { SliderComponent } from './components/slider/slider.component';
import { RouterModule } from '@angular/router';
import { GoTopComponent } from './components/go-top/go-top.component';
import { GoTopDirective } from './directives/go-top.directive';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatBadgeModule,
    MatSidenavModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatBadgeModule,
    MatSidenavModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    ContactDialogComponent,
    SliderComponent,
    GoTopDirective
  ],
  declarations: [
    ContactDialogComponent,
    SliderComponent,
    GoTopComponent,
    GoTopDirective,
    LoaderComponent
  ],
  entryComponents: [
    GoTopComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
