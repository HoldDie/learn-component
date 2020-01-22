import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements AfterViewInit, OnInit {
  public title = '星际争霸';

  constructor() {
  }

  public getVal(): any {
    return 1234;
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

}
