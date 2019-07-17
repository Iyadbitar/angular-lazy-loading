import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from './config.service'


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ConfigService]
})
export class ServicesModule {

  public static forRoot(): ModuleWithProviders {
    return {
        ngModule: ServicesModule,
        providers: [
          ConfigService
        ]
    };
  }
}
