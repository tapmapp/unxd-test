import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('src/app/item/item.module').then(
        (itemModule) => itemModule.ItemModule
      ),
  },
  {
    path: ':itemId',
    loadChildren: () =>
      import('src/app/item/item.module').then(
        (itemModule) => itemModule.ItemModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
