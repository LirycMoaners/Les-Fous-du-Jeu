import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { routedComponents, GalleryRoutingModule } from './gallery-routing.module';

@NgModule({
  imports: [
    GalleryRoutingModule,
    SharedModule
  ],
  exports: [],
  declarations: [routedComponents],
  providers: []
})
export class GalleryModule { }
