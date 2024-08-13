import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: 'shopping/products',
    loadChildren: () => loadRemoteModule(
      {
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './ProductsModule'
      }
    ).then(m => m.ProductsModule)
  },
  {
    path: 'payment/buy',
    loadChildren: () => loadRemoteModule(
      {
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './BuyModule'
      }
    ).then(m => m.BuyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
