import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MODULES
import { CarouselModule } from './carousel/carousel.module';

// COMPONENTS
import { ViewerComponent } from './viewer.component';

// SERVICES
import { ViewerService } from './services/viewer.service';

@NgModule({
  declarations: [ViewerComponent],
  imports: [CarouselModule, CommonModule],
  exports: [ViewerComponent],
  providers: [ViewerService],
})
export class ViewerModule {}
