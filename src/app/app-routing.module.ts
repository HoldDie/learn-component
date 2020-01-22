import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./my-dashboard/my-dashboard.module').then(m => m.MyDashboardModule)
  },
  {
    path: 'eventBinding',
    loadChildren: () => import('./event-binding/event-binding.module').then(m => m.EventBindingModule)
  }, {
    path: 'interpolation',
    loadChildren: () => import('./interpolation/interpolation.module').then(m => m.InterpolationModule)
  }, {
    path: 'ngClass',
    loadChildren: () => import('./ng-class/ng-class.module').then(m => m.NgClassModule)
  }, {
    path: 'ngFor',
    loadChildren: () => import('./ng-for/ng-for.module').then(m => m.NgForModule)
  }, {
    path: 'ngIf',
    loadChildren: () => import('./ng-if/ng-if.module').then(m => m.NgIfModule)
  }, {
    path: 'ngModel',
    loadChildren: () => import('./ng-model/ng-model.module').then(m => m.NgModelModule)
  }, {
    path: 'ngSwitch',
    loadChildren: () => import('./ng-switch/ng-switch.module').then(m => m.NgSwitchModule)
  }, {
    path: 'ngStyle',
    loadChildren: () => import('./ng-style/ng-style.module').then(m => m.NgStyleModule)
  }, {
    path: 'pipe',
    loadChildren: () => import('./pipe/pipe.module').then(m => m.PipeModule)
  }, {
    path: 'safeNav',
    loadChildren: () => import('./safe-nav/safe-nav.module').then(m => m.SafeNavModule)
  }, {
    path: 'tempRefVar',
    loadChildren: () => import('./temp-ref-var/temp-ref-var.module').then(m => m.TempRefVarModule)
  }, {
    path: 'twowayBinding',
    loadChildren: () => import('./twoway-binding/twoway-binding.module').then(m => m.TwowayBindingModule)
  }, {
    path: 'valueBinding',
    loadChildren: () => import('./value-binding/value-binding.module').then(m => m.ValueBindingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
