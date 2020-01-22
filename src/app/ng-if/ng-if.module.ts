import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgIfComponent} from './ng-if.component';
import {NgIfRoutingModule} from './ng-if-routing.module';


@NgModule({
  declarations: [NgIfComponent],
  imports: [
    CommonModule,
    NgIfRoutingModule
  ]
})
export class NgIfModule {
}
