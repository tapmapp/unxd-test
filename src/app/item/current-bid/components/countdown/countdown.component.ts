import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
})
export class CountdownComponent implements OnInit {
  @Input() timestamp!: number;

  public days!: number;
  public hours!: number;
  public minutes!: number;
  public seconds!: number;

  constructor() {}

  setTimeStamps(): void {
    this.days = Math.floor(this.timestamp / 86400);
    const decimalDays = Math.floor(this.timestamp % 86400);

    this.hours = Math.floor(decimalDays / 3600);
    const decimalHours = Math.floor(decimalDays % 3600);

    this.minutes = Math.floor(decimalHours / 60);
    const seconds = Math.floor(decimalDays % 60);

    this.seconds = seconds;

    this.timestamp -= 1;

    setTimeout(() => {
      this.setTimeStamps();
    }, 1000);
  }

  ngOnInit(): void {
    this.timestamp = this.timestamp - new Date().getTime();
    this.setTimeStamps();
  }
}
