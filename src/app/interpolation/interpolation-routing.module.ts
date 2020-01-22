import {Router, RouterModule, Routes} from '@angular/router';
import {InterpolationComponent} from './interpolation.component';
import {NgModule} from '@angular/core';

const routes: Routes = [{
  path: '',
  component: InterpolationComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterpolationRoutingModule {
}
