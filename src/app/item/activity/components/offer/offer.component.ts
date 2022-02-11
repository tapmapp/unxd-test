import { Component, Input, OnInit } from '@angular/core';

// INTERFACES
import { Activity } from '../../interfaces/activity.interface';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
})
export class OfferComponent implements OnInit {
  @Input() activity!: Activity;
  constructor() {}

  ngOnInit(): void {}
}
