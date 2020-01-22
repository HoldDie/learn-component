import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-safe-nav',
  templateUrl: './safe-nav.component.html',
  styleUrls: ['./safe-nav.component.css']
})
export class SafeNavComponent implements OnInit {

  public currentValue1: any = null;
  public currentValue2 = {name: 'value2'};

  constructor() {
  }

  ngOnInit() {
  }

}
