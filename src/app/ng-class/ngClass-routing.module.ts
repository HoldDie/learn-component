import {RouterModule, Routes} from '@angular/router';
import {NgClassComponent} from './ng-class.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: NgClassComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgClassRoutingModule {
}
