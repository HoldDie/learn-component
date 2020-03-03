import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  private _panelTitle = '我是子组件';

  @Input()
  set panelTitle(panelTitle: string) {
    this._panelTitle = '【' + panelTitle + '】';
  }

  get panelTitle(): string {
    return this._panelTitle;
  }

  @Output()
  public follow = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  public emitAnEvent(event): void {
    this.follow.emit('follow');
  }

  public childFn(): void {
    console.log('子组件名字是>' + this.panelTitle);
  }

}
