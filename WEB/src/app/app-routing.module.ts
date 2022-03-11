import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareasComponent } from './components/tareas/tareas.component';
import { Error404Component } from './error404/error404.component';
import { HomeComponentComponent } from './pages/home/home-component/home-component.component';
import { Pagina2Component } from './pages/pagina2/pagina2.component';
import { PujasComponent } from './pages/pujas/pujas.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponentComponent,
  },
  {
    path: 'tarea/:id',
    component: Pagina2Component,
  },
  {
    path: 'producto/:id',
    component: PujasComponent,
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
