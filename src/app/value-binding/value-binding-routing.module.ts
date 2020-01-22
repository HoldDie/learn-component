import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ValueBindingComponent} from './value-binding.component';

const routes: Routes = [
  {
    path: '',
    component: ValueBindingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValueBindingRoutingModule {
}
