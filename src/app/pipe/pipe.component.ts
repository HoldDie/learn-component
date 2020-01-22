import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  public currentTime: Date;


  constructor() {
  }

  ngOnInit() {
    window.setInterval(
      () => {
        this.currentTime = new Date();
      }
      , 1000
    );
  }

}
