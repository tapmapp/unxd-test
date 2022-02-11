import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

// SERVICES
import { ItemService } from './services/item.service';

// INTERFACES
import { Item } from './interfaces/item.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit, OnDestroy {
  private subscribers = new Subscription();
  public item!: Item;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute
  ) {}

  private async getItem(itemId: string): Promise<void> {
    this.item = await this.itemService.getItemById(itemId).toPromise();
  }

  ngOnInit(): void {
    const routeSubscriber = this.route.params.subscribe((params) => {
      const itemId = params['itemId'];
      this.getItem(itemId);
    });
    this.subscribers.add(routeSubscriber);
  }

  ngOnDestroy(): void {
    this.subscribers.unsubscribe();
  }
}
