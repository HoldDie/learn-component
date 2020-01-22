import {RouterModule, Routes} from '@angular/router';
import {NgIfComponent} from './ng-if.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: NgIfComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgIfRoutingModule {
}
