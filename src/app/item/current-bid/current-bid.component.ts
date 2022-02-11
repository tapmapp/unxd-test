import { Component, Input, OnInit } from '@angular/core';

// SERVICES
import { CurrentBidService } from './services/current-bid.service';
import { MetamaskService } from 'src/app/shared/services/metamask.service';

// INTERFACES
import { Bid } from './interfaces/bid.interface';

@Component({
  selector: 'app-current-bid',
  templateUrl: './current-bid.component.html',
  styleUrls: ['./current-bid.component.scss'],
})
export class CurrentBidComponent implements OnInit {
  @Input() itemId!: string;

  public currentBid!: Bid;
  public isVisible = false;
  public window = window;

  constructor(
    private currentBidService: CurrentBidService,
    private metamaskService: MetamaskService
  ) {}

  public async getCurrentBid(): Promise<void> {
    this.currentBid = await this.currentBidService
      .getCurrentByItemId(this.itemId)
      .toPromise();
  }

  public showModal(): void {
    this.isVisible = true;
  }

  public handleOk(): void {
    this.isVisible = false;
  }

  public handleCancel(): void {
    this.isVisible = false;
  }

  public async connectMetamask(): Promise<void> {
    this.metamaskService.connectMetamask();
  }

  public getMetamask(): void {
    let a = document.createElement('a');
    a.target = '_blank';
    a.href =
      'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en';
    a.click();
  }

  ngOnInit(): void {
    this.getCurrentBid();
  }
}
