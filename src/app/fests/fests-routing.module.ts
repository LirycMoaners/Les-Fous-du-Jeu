import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FestListComponent } from './fest-list/fest-list.component';
import { FestComponent } from './fest/fest.component';

const routes: Routes = [
  {
    path: '',
    component: FestListComponent
  },
  {
    path: ':id',
    component: FestComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FestsRoutingModule { }

export const routedComponent = [
  FestListComponent,
  FestComponent
];
