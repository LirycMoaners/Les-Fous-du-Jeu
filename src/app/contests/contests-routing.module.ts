import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContestListComponent } from './contest-list/contest-list.component';
import { ContestComponent } from './contest/contest.component';

const routes: Routes = [
  {
    path: '',
    component: ContestListComponent
  },
  {
    path: ':id',
    component: ContestComponent
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
export class ContestsRoutingModule { }

export const routedComponent = [
  ContestListComponent,
  ContestComponent
];
