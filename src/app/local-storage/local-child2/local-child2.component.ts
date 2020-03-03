import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-local-child2',
  templateUrl: './local-child2.component.html',
  styleUrls: ['./local-child2.component.css']
})
export class LocalChild2Component implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  public readData(): void {
    const jsonData = window.localStorage.getItem('json');
    const obj = JSON.parse(jsonData);
    console.log(obj.name);
    console.log(obj.age);
  }
}
