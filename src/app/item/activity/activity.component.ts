import { Component, Input, OnInit } from '@angular/core';

// SERVICES
import { ActivityService } from './services/activity.service';

// INTERFACES
import { Activity } from './interfaces/activity.interface';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent implements OnInit {
  @Input() itemId!: string;
  public activities!: Activity[];

  constructor(private activityService: ActivityService) {}

  private async getActivities(): Promise<void> {
    this.activities = await this.activityService
      .getActivityByItemId(this.itemId)
      .toPromise();
  }

  ngOnInit(): void {
    this.getActivities();
  }
}
