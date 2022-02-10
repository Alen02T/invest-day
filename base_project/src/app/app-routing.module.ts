import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomenicoComponent } from './domenico/domenico.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  {
    path: '',
    component: DomenicoComponent,
  },
  {
    path: 'domenico',
    component: DomenicoComponent,
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
