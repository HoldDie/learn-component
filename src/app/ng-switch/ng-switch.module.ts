import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgSwitchComponent} from './ng-switch.component';
import {NgSwitchRoutingModule} from './ng-switch-routing.module';


@NgModule({
  declarations: [NgSwitchComponent],
  imports: [
    CommonModule,
    NgSwitchRoutingModule
  ]
})
export class NgSwitchModule {
}
