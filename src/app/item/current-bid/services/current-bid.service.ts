import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

// INTERFACES
import { Bid } from '../interfaces/bid.interface';

@Injectable()
export class CurrentBidService {
  constructor() {}

  public getCurrentByItemId(itemId: string): Observable<Bid> {
    // GET GRAPHQL REQUEST BUT MOCKED RESPONSE
    return of({
      id: '12345',
      amount: '2.5',
      amountDollars: '5918',
      timestamp: new Date().getTime() + 86415,
    });
  }
}
