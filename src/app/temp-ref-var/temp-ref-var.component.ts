import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-temp-ref-var',
  templateUrl: './temp-ref-var.component.html',
  styleUrls: ['./temp-ref-var.component.css']
})
export class TempRefVarComponent implements OnInit {

  public currentValue: any = {name: '123'};

  public sayHello(name: string): void {
    console.log('xxx:' + name);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
