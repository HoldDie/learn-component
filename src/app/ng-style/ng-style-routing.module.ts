import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {NgStyleComponent} from './ng-style.component';

const routes: Routes = [
  {
    path: '',
    component: NgStyleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgStyleRoutingModule {
}
