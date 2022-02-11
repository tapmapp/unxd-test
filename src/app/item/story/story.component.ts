import { Component, Input, OnInit } from '@angular/core';

// INTERFACES
import { Story } from '../interfaces/item.interface';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
})
export class StoryComponent implements OnInit {
  @Input() stories!: Story[];

  constructor() {}

  ngOnInit(): void {}
}
