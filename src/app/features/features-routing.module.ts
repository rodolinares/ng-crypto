import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'hashing',
    loadChildren: () =>
      import('./components/hashing/hashing.module').then(m => m.HashingModule)
  },
  {
    path: 'ciphers',
    loadChildren: () =>
      import('./components/ciphers/ciphers.module').then(m => m.CiphersModule)
  },
  {
    path: 'encoders',
    loadChildren: () =>
      import('./components/encoders/encoders.module').then(
        m => m.EncodersModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {}
