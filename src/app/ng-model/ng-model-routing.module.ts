import {RouterModule, Routes} from '@angular/router';
import {NgModelComponent} from './ng-model.component';
import {NgModule} from '@angular/core';

const routes: Routes = [{
  path: '',
  component: NgModelComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgModelRoutingModule {
}
