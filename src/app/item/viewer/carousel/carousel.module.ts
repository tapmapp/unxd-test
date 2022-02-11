import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MODULES
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

// COMPONENTS
import { CarouselComponent } from './carousel.component';

@NgModule({
  declarations: [CarouselComponent],
  imports: [CommonModule, NgxUsefulSwiperModule],
  exports: [CarouselComponent],
})
export class CarouselModule {}
