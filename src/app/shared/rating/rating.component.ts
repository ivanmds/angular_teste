import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  rates: number[] = [1, 2, 3, 4, 5];
  rate: number = 0;
  previousRate: number = this.rate;

  @Output() rated = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() {
  }

  setRate(rate: number): void{
    this.rate = rate;
    this.previousRate = this.rate;
    this.rated.emit(rate);
  }

  onMouseOver(rate: number): void{
    this.rate = rate;
  }

  onMouseOut() {
    this.rate = this.previousRate;
  }


}
