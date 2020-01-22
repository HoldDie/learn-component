import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SafeNavComponent} from './safe-nav.component';

const routes: Routes = [
  {
    path: '',
    component: SafeNavComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SafeNavRoutingModule {
}
