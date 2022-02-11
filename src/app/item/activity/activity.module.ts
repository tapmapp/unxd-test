import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { ActivityComponent } from './activity.component';
import { AuctionComponent } from './components/auction/auction.component';
import { ListedComponent } from './components/listed/listed.component';
import { OfferComponent } from './components/offer/offer.component';

// SERVICES
import { ActivityService } from './services/activity.service';

@NgModule({
  declarations: [
    ActivityComponent,
    AuctionComponent,
    ListedComponent,
    OfferComponent,
  ],
  imports: [CommonModule],
  exports: [
    ActivityComponent,
    AuctionComponent,
    ListedComponent,
    OfferComponent,
  ],
  providers: [ActivityService],
})
export class ActivityModule {}
