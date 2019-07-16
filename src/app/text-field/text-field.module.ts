import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './text-input/text-input.component';



@NgModule({
  declarations: [TextInputComponent],
  imports: [
    CommonModule
  ],
  entryComponents: [TextInputComponent]
})
export default class TextFieldModule {
  static entry = TextInputComponent;
}
