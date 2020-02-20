import { Directive, ElementRef, ComponentFactoryResolver, ViewContainerRef, Input } from '@angular/core';
import { GoTopComponent } from '../components/go-top/go-top.component';

@Directive({ selector: '[appGoTop]' })
export class GoTopDirective {
  constructor(
    private el: ElementRef,
    private vc: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.loadComponent();
  }

  loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(GoTopComponent);

    const componentRef = this.vc.createComponent(componentFactory);
    componentRef.instance.elementRef = this.el;
  }
}
