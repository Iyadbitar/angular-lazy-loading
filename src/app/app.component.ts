import { Component, OnInit, SystemJsNgModuleLoader, Injector, ViewContainerRef, NgModuleFactory } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-lazy-loading';

  constructor(
    private loader: SystemJsNgModuleLoader,
    private injector: Injector,
    private vcRef: ViewContainerRef
  ) {}

  ngOnInit() {
    this.loader.load('./src/app/text-field/text-field.module')
      .then((moduleFactory: NgModuleFactory<any>) => {
        const moduleRef = moduleFactory.create(this.injector)
        const component = (<any>moduleFactory.moduleType).entry;
        const componentFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(component);
        this.vcRef.createComponent(componentFactory)
      })
  }
}
