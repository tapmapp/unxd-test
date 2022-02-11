import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { ItemDescriptionComponent } from './item-description.component';

@NgModule({
  declarations: [ItemDescriptionComponent],
  imports: [CommonModule],
  exports: [ItemDescriptionComponent],
})
export class ItemDescriptionModule {}
