import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrotherComponent} from './brother/brother.component';
import {Child1Component} from './brother/child1/child1.component';
import {Child2Component} from './brother/child2/child2.component';
import {LocalStorageComponent} from './local-storage/local-storage.component';
import {LocalChild1Component} from './local-storage/local-child1/local-child1.component';
import {LocalChild2Component} from './local-storage/local-child2/local-child2.component';
import {ParentAndChildComponent} from './parent-and-child/parent-and-child.component';
import {ChildComponent} from './parent-and-child/child/child.component';
import {EventBusService} from './brother/service/event-bus.service';

@NgModule({
  declarations: [
    AppComponent,
    BrotherComponent,
    Child1Component,
    Child2Component,
    LocalStorageComponent,
    LocalChild1Component,
    LocalChild2Component,
    ParentAndChildComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [EventBusService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
