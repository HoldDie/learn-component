import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventBindingComponent} from './event-binding.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {EventBindingRoutingModule} from './event-binding-routing.module';


@NgModule({
  declarations: [EventBindingComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    EventBindingRoutingModule
  ]
})
export class EventBindingModule {
}
