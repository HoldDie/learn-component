import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'font-resizer',
  templateUrl: './font-resizer.component.html',
  styleUrls: ['./font-resizer.component.css']
})
export class FontResizerComponent implements OnInit {
  @Input() size: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  dec() {
    this.resize(-1);
    console.log('size:', this.size);
  }

  inc() {
    this.resize(+1);
  }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }
}
