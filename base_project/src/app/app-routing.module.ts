import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { SubastasComponent } from './subastas/subastas.component';

const routes: Routes = [
  {
    path: '',
    component: SubastasComponent,
  },
  {
    path: 'subastas',
    component: SubastasComponent,
  },
  {
    path: '**',
    component: Error404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
