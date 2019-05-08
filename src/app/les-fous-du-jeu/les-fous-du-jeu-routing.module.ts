import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PartnersComponent } from './partners/partners.component';
import { FestComponent } from './fests/fest/fest.component';
import { FestListComponent } from './fests/fest-list/fest-list.component';
import { ContestListComponent } from './contests/contest-list/contest-list.component';
import { ContestComponent } from './contests/contest/contest.component';
import { LesFousDuJeuComponent } from './les-fous-du-jeu.component';

const routes: Routes = [
  {
    path: '',
    component: LesFousDuJeuComponent,
    children: [
      {
        path: '',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'articles/:id',
        component: ArticleComponent
      },
      {
        path: 'fests',
        component: FestListComponent
      },
      {
        path: 'fests/:id',
        component: FestComponent
      },
      {
        path: 'gallery',
        component: GalleryComponent
      },
      {
        path: 'contests',
        component: ContestListComponent
      },
      {
        path: 'contests/:id',
        component: ContestComponent
      },
      {
        path: 'partners',
        component: PartnersComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LesFousDuJeuRoutingModule { }

export const routedComponents = [
  LesFousDuJeuComponent,
  HomeComponent,
  ArticleComponent,
  FestListComponent,
  FestComponent,
  GalleryComponent,
  ContestListComponent,
  ContestComponent,
  PartnersComponent
];
