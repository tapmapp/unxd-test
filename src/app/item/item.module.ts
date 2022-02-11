import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MODULES
import { ActivityModule } from './activity/activity.module';
import { CurrentBidModule } from './current-bid/current-bid.module';
import { ItemDescriptionModule } from './item-description/item-description.module';
import { ItemRoutingModule } from './item-routing.module';
import { StoryModule } from './story/story.module';
import { ViewerModule } from './viewer/viewer.module';

// COMPONENTS
import { ItemComponent } from './item.component';

// SERVICES
import { ItemService } from './services/item.service';

@NgModule({
  declarations: [ItemComponent],
  imports: [
    ActivityModule,
    CommonModule,
    CurrentBidModule,
    ItemDescriptionModule,
    ItemRoutingModule,
    StoryModule,
    ViewerModule,
  ],
  providers: [ItemService],
})
export class ItemModule {}
