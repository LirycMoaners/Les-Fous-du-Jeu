import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContestsComponent } from './contests.component';
import { ContestComponent } from './contest/contest.component';

const routes: Routes = [
  {
    path: '',
    component: ContestsComponent
  },
  {
    path: ':id',
    component: ContestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [],
})
export class ContestsRoutingModule { }

export const routedComponents = [
  ContestsComponent,
  ContestComponent
];
