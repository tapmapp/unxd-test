import { Component, Input, OnInit } from '@angular/core';

// INTERFACES
import { Activity } from '../../interfaces/activity.interface';

@Component({
  selector: 'app-listed',
  templateUrl: './listed.component.html',
  styleUrls: ['./listed.component.scss'],
})
export class ListedComponent implements OnInit {
  @Input() activity!: Activity;
  constructor() {}

  ngOnInit(): void {}
}
