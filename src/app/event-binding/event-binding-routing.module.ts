import {RouterModule, Routes} from '@angular/router';
import {EventBindingComponent} from './event-binding.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: EventBindingComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventBindingRoutingModule {
}
