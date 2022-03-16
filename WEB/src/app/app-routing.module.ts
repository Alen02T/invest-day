import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarComponent } from './components/actualizar/actualizar.component';
import { BorrarComponent } from './components/borrar/borrar.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { Erro404Component } from './components/erro404/erro404.component';
import { HomeComponentComponent } from './pages/home/home-component/home-component.component';
import { TaskPageComponent } from './pages/task-page/task-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponentComponent,
  },
  {
    path: 'task',
    component: TaskPageComponent,
  }, 
  {
    path: 'tarea/borrar/:id',
    component: BorrarComponent
  },
  {
    path: 'tarea/actualizar/:id',
    component: ActualizarComponent,
  },
  {
    path: '**',
    component: Erro404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

