import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SafeNavRoutingModule} from './safe-nav-routing.module';
import {SafeNavComponent} from './safe-nav.component';


@NgModule({
  declarations: [SafeNavComponent],
  imports: [
    CommonModule,
    SafeNavRoutingModule
  ]
})
export class SafeNavModule {
}
