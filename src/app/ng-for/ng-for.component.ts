import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  constructor() {
  }

  public races: Array<any> = [
    {name: 'tem0'},
    {name: 'tem1'},
    {name: 'tem2'},
  ];

  ngOnInit(): void {
  }

}
