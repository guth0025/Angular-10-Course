import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tap-counter',
  templateUrl: './tap-counter.component.html',
  styleUrls: ['./tap-counter.component.css']
})
export class TapCounterComponent implements OnInit {
   tapCount = 0
  constructor() { }

  ngOnInit(): void {
  }

  handleClick(){
    this.tapCount += 1
  }

}
