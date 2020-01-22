import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TwowayBindingRoutingModule} from './twoway-binding-routing.module';
import {TwowayBindingComponent} from './twoway-binding.component';
import {FontResizerComponent} from './font-resizer/font-resizer.component';


@NgModule({
  declarations: [TwowayBindingComponent, FontResizerComponent],
  imports: [
    CommonModule,
    TwowayBindingRoutingModule
  ]
})
export class TwowayBindingModule {
}
