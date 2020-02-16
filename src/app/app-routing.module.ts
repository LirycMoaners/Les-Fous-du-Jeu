import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartnersComponent } from './modules/partners/partners.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'articles'
  },
  {
    path: 'articles',
    loadChildren: () => import('./modules/articles/articles.module').then(m => m.ArticlesModule)
  },
  {
    path: 'fests',
    loadChildren: () => import('./modules/fests/fests.module').then(m => m.FestsModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./modules/gallery/gallery.module').then(m => m.GalleryModule)
  },
  {
    path: 'contests',
    loadChildren: () => import('./modules/contests/contests.module').then(m => m.ContestsModule)
  },
  {
    path: 'partners',
    loadChildren: () => import('./modules/partners/partners.module').then(m => m.PartnersModule)
  },
  {
    path: '**',
    redirectTo: 'articles'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [
  PartnersComponent
];
