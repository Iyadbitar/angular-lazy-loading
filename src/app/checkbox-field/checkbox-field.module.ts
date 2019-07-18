import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxInputComponent } from './checkbox-input/checkbox-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CheckboxInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    CheckboxInputComponent
  ]
})
export default class CheckboxFieldModule {
  static entry = CheckboxInputComponent;
}
