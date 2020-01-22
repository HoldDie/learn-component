import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InterpolationComponent} from './interpolation.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {InterpolationRoutingModule} from './interpolation-routing.module';


@NgModule({
  declarations: [InterpolationComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    InterpolationRoutingModule
  ]
})
export class InterpolationModule {
}
