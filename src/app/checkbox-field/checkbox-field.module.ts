import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxInputComponent } from './checkbox-input/checkbox-input.component';



@NgModule({
  declarations: [CheckboxInputComponent],
  imports: [
    CommonModule
  ],
  entryComponents: [
    CheckboxInputComponent
  ]
})
export default class CheckboxFieldModule {
  static entry = CheckboxInputComponent;
}
