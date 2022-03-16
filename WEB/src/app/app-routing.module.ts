import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarComponent } from './components/actualizar/actualizar.component';
import { BorrarComponent } from './components/borrar/borrar.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { Erro404Component } from './components/erro404/erro404.component';
import { PaginaBienvenidaComponent } from './components/pagina-bienvenida/pagina-bienvenida.component';
import { AllTaskPageComponent } from './pages/all-task-page/all-task-page.component';
import { HomeComponentComponent } from './pages/home/home-component/home-component.component';
import { NoTaskPageComponent } from './pages/no-task-page/no-task-page.component';
import { TaskPageComponent } from './pages/task-page/task-page.component';

const routes: Routes = [
  {
    path: '',
    component: PaginaBienvenidaComponent,
  },
  {
    path: 'home',
    component: HomeComponentComponent,
  },
  {
    path: 'task',
    component: TaskPageComponent,
  }, 
  {
    path: 'no-task',
    component: NoTaskPageComponent,
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

