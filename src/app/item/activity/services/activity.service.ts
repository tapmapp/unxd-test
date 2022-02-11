import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

// INTERFACES
import { Activity } from '../interfaces/activity.interface';

@Injectable()
export class ActivityService {
  constructor() {}

  public getActivityByItemId(itemId: string): Observable<Activity[]> {
    // GET GRAPHQL REQUEST BUT MOCKED RESPONSE
    return of([
      {
        id: '12345',
        type: 'offer',
        userIcon: 'http://localhost:4200/assets/img/user-thumb-0.svg',
        userTag: '@Jackfriction23',
        amount: '2.6 wETH',
        timestamp: 1234566789,
      },
      {
        id: '123456',
        type: 'auction',
        userIcon: 'http://localhost:4200/assets/img/user-thumb-1.svg',
        userTag: '@JimmyJones',
        timestamp: 1234566789,
      },
      {
        id: '1234567',
        type: 'listed',
        userIcon: 'http://localhost:4200/assets/img/user-thumb-1.svg',
        userTag: '@JimmyJones',
        timestamp: 1234566789,
      },
    ]);
  }
}
