import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements AfterViewInit, OnInit {
  constructor() {
  }

  ngOnInit() {
    console.log('ng OnInit');
  }

  ngAfterViewInit() {
    console.log('ng AfterView');
  }

  public btnClick(event): void {
    console.log('test event binding!');
  }
}
