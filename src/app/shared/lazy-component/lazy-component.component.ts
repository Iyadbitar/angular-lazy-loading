import { Component, OnInit, Input, NgModuleFactory, SystemJsNgModuleLoader, Injector, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-lazy-component',
  templateUrl: './lazy-component.component.html',
  styleUrls: ['./lazy-component.component.scss']
})
export class LazyComponentComponent implements OnInit {

  @Input() moduleUrl: string;
  @Input() component: string;
  @Input() componentInput: string = '{}';

  constructor(
    private loader: SystemJsNgModuleLoader,
    private injector: Injector,
    private vcRef: ViewContainerRef
  ) { }

  ngOnInit() {
    this.loader.load(this.moduleUrl)
      .then((moduleFactory: NgModuleFactory<any>) => {
        const moduleRef = moduleFactory.create(this.injector)
        const component = (<any>moduleFactory.moduleType)[this.component];
        const componentFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(component);
        let compRef = this.vcRef.createComponent(componentFactory);
        Object.assign(compRef.instance, this.componentInput);
      })
  }

}
