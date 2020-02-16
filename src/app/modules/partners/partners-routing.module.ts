import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartnersComponent } from './partners.component';

const routes: Routes = [
  {
    path: '',
    component: PartnersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [],
})
export class PartnersRoutingModule { }

export const routedComponents = [
  PartnersComponent
];
