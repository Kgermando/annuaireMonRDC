import { NgModule } from '@angular/core';
import {MatSliderModule, MatSlideToggleModule, MatFormFieldModule} from '@angular/material';

const materialComponent = [
  MatSliderModule,
  MatSlideToggleModule,
  MatFormFieldModule
];


@NgModule({
  exports: [materialComponent],
  imports: [materialComponent]
})
export class MaterialModule { }
