import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ValueBindingRoutingModule} from './value-binding-routing.module';
import {ValueBindingComponent} from './value-binding.component';


@NgModule({
  declarations: [ValueBindingComponent],
  imports: [
    CommonModule,
    ValueBindingRoutingModule
  ]
})
export class ValueBindingModule {
}
