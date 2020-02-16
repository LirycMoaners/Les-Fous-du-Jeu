import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FestComponent } from './fest/fest.component';
import { FestsComponent } from './fests.component';

const routes: Routes = [
  {
    path: '',
    component: FestsComponent
  },
  {
    path: ':id',
    component: FestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [],
})
export class FestsRoutingModule { }

export const routedComponents = [
  FestsComponent,
  FestComponent
];
