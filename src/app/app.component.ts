import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { LoaderService } from './core/services/loader.service';
import { LoaderComponent } from './shared/components/loader/loader.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lesFousDuJeu';
  loaderComponentRef: ComponentRef<LoaderComponent>;

  constructor(
    public router: Router,
    private readonly viewContainerRef: ViewContainerRef,
    private readonly componentFactoryResolver: ComponentFactoryResolver,
    private readonly swUpdate: SwUpdate,
    private readonly loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm('Une nouvelle version est disponible ! Souhaitez-vous recharger votre page pour la visualiser ?')) {
          window.location.reload();
        }
      });
    }

    this.loaderService.isLoaderVisible.subscribe(isLoaderVisible => {
      setTimeout(() => {
        if (isLoaderVisible) {
          const componentFactory = this.componentFactoryResolver.resolveComponentFactory(LoaderComponent);
          this.loaderComponentRef = this.viewContainerRef.createComponent(componentFactory);
        } else if (this.loaderComponentRef) {
          this.loaderComponentRef.destroy();
        }
      }, 0);
    });
  }
}
