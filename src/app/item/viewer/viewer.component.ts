import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

// SERVICES
import { ViewerService } from './services/viewer.service';

// INTERFACES
import { Thumbnail } from '../interfaces/item.interface';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss'],
})
export class ViewerComponent implements OnInit {
  private previewImgUrl = new Subscription();

  @Input() preview!: string;
  @Input() thumbnails!: Thumbnail[];

  constructor(private viewerService: ViewerService) {}

  ngOnInit(): void {
    const previewImgSubscriber = this.viewerService.preview$.subscribe(
      (previewImgUrl: string) => {
        this.preview = previewImgUrl;
      }
    );
    this.previewImgUrl.add(previewImgSubscriber);
  }
  ngOnDestroy(): void {
    this.previewImgUrl.unsubscribe();
  }
}
