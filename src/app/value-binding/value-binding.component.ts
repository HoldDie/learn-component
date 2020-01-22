import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-value-binding',
  templateUrl: './value-binding.component.html',
  styleUrls: ['./value-binding.component.css']
})
export class ValueBindingComponent implements OnInit {

  public imgSrc = './assets/imgs/1.jpg';

  constructor() {
  }

  ngOnInit() {
  }

  public changeSrc(): void {
    if (Math.ceil(Math.random() * 1000000) % 2) {
      this.imgSrc = './assets/imgs/1.jpg';
    } else {
      this.imgSrc = './assets/imgs/2.jpg';
    }
  }

}
