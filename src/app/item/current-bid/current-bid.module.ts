import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ANTD
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';

// COMPONENTS
import { CurrentBidComponent } from './current-bid.component';
import { CountdownComponent } from './components/countdown/countdown.component';

// SERVICES
import { CurrentBidService } from './services/current-bid.service';

@NgModule({
  declarations: [CurrentBidComponent, CountdownComponent],
  imports: [CommonModule, NzButtonModule, NzModalModule],
  exports: [CurrentBidComponent],
  providers: [CurrentBidService],
})
export class CurrentBidModule {}
