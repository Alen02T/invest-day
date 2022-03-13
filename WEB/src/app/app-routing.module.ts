import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareasComponent } from './components/tareas/tareas.component';
import { Error404Component } from './error404/error404.component';
import { ActualizarComponent } from './pages/actualizar/actualizar.component';
import { HomeComponentComponent } from './pages/home/home-component/home-component.component';
import { BorrarComponent } from './pages/borrar/borrar.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponentComponent,
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
    component: Error404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
