import {RouterModule, Routes} from '@angular/router';
import {NgForComponent} from './ng-for.component';
import {NgModule} from '@angular/core';

const routes: Routes = [{
  path: '',
  component: NgForComponent
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgForRoutingModule {
}
