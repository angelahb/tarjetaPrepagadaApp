import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
   path: 'prepagada',
   loadChildren: () => import('./components/tarjeta.module').then(m => m.TarjetaModule)
  },
  {
    path: '**',
    redirectTo: 'prepagada'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
