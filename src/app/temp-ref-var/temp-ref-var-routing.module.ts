import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {TempRefVarComponent} from './temp-ref-var.component';

const routes: Routes = [
  {
    path: '',
    component: TempRefVarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TempRefVarRoutingModule {
}
