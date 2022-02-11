import { Component, Input, OnInit } from '@angular/core';

// INTERFACES
import { CreatedBy, Feature, OwnedBy } from '../interfaces/item.interface';

@Component({
  selector: 'app-item-description',
  templateUrl: './item-description.component.html',
  styleUrls: ['./item-description.component.scss'],
})
export class ItemDescriptionComponent implements OnInit {
  @Input() collection!: string;
  @Input() title!: string;
  @Input() edition!: string;
  @Input() features!: Feature[];
  @Input() createdBy!: CreatedBy[];
  @Input() ownedBy!: OwnedBy[];
  @Input() content!: string[];

  constructor() {}

  ngOnInit(): void {}
}
