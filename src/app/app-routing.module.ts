import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CustomPreloadingService } from './services/custom-preloading.service';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },

  // {
  //   path: 'users',
  //   loadChildren: () =>
  //     import('./pages/users/users.module').then((m) => m.UserModule),
  // },
  // green this for use custom preloding strategy
  // {
  //   path: 'products',
  //   loadChildren: () =>
  //     import('./products/products.module').then((m) => m.ProductsModule),
  //   data: { preload: false }, // Do not preload this module
  // },
  // green this for use custom preloding strategy
  // {
  //   path: 'another-feature',
  //   loadChildren: () =>
  //     import('./products/products.module').then((m) => m.ProductsModule),
  //   data: { preload: true }, //preload this module
  // },
];

@NgModule({
  imports: [
    // green this for use preload all
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    // green this for use custom preloding strategy
    // RouterModule.forRoot(routes, {
    //   preloadingStrategy: CustomPreloadingService,
    // }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
