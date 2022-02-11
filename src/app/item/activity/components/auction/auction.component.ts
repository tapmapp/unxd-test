import { Component, Input, OnInit } from '@angular/core';

// INTERFACES
import { Activity } from '../../interfaces/activity.interface';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.scss'],
})
export class AuctionComponent implements OnInit {
  @Input() activity!: Activity;

  constructor() {}

  ngOnInit(): void {}
}
