import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MODULES
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';

// SERVICES
import { MetamaskService } from './services/metamask.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [HeaderModule, FooterModule],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule,
      providers: [MetamaskService],
    };
  }
}
