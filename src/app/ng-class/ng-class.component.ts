import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  public currentClasses: {};
  public canSave = true;
  public isUnchanged = true;
  public isSpecial = true;

  constructor() {
  }

  ngOnInit() {
  }

  setCurrentClasses() {
    this.currentClasses = {
      saveAble: this.canSave,
      modified: this.isUnchanged,
      special: this.isSpecial
    };
  }

}

