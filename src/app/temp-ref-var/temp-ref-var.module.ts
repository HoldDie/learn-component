import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TempRefVarRoutingModule} from './temp-ref-var-routing.module';
import {TempRefVarComponent} from './temp-ref-var.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [TempRefVarComponent],
  imports: [
    CommonModule,
    TempRefVarRoutingModule,
    FormsModule
  ]
})
export class TempRefVarModule {
}
