import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PartnersComponent } from './partners/partners.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'article/:id',
    component: ArticleComponent
  },
  {
    path: 'fests',
    loadChildren: './fests/fests.module#FestsModule'
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'contests',
    loadChildren: './contests/contests.module#ContestsModule'
  },
  {
    path: 'partners',
    component: PartnersComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [
  HomeComponent,
  ArticleComponent,
  GalleryComponent,
  PartnersComponent
];
