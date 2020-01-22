import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {TwowayBindingComponent} from './twoway-binding.component';

const routes: Routes = [
  {
    path: '',
    component: TwowayBindingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwowayBindingRoutingModule {
}
