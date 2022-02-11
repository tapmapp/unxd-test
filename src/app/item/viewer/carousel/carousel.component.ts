import {
  AfterViewInit,
  Component,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';
import { SwiperComponent } from 'ngx-useful-swiper';
import { SwiperOptions } from 'swiper';

// SERVICES
import { ViewerService } from '../services/viewer.service';

// INTERFACES
import { Thumbnail } from '../../interfaces/item.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements AfterViewInit {
  @ViewChild('swiper', { static: false }) swiper!: SwiperComponent;

  @Input() thumbnails!: Thumbnail[];

  public config: SwiperOptions = {
    direction: 'vertical',
    slidesPerView: 5,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 15,
  };
  constructor(private viewerService: ViewerService) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth < 1200) {
      this.swiper.swiper.changeDirection('horizontal');
    } else {
      this.swiper.swiper.changeDirection('vertical');
    }
  }

  public setCarouselConfig(): void {
    if (window.innerWidth < 1200) {
      this.swiper.swiper.changeDirection('horizontal');
    }
  }

  public setPreviewImg(thumbnailUrl: string): void {
    this.viewerService.setPreviewImg(thumbnailUrl);
  }

  ngAfterViewInit(): void {
    this.setCarouselConfig();
  }
}
