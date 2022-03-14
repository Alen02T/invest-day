import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './pages/home/home-component/home-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { SectionComponent } from './components/section/section.component';
import { LastActivitiesComponent } from './components/last-activities/last-activities.component';
import { SugerenciasComponent } from './components/sugerencias/sugerencias.component';
import { TareaService } from './services/tarea.service';
import { TaskPageComponent } from './pages/task-page/task-page.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { BorrarComponent } from './components/borrar/borrar.component';
import { ActualizarComponent } from './components/actualizar/actualizar.component';
import { Erro404Component } from './components/erro404/erro404.component';
import { SeeTasksComponent } from './components/see-tasks/see-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    CabeceraComponent,
    SectionComponent,
    LastActivitiesComponent,
    SugerenciasComponent,
    TaskPageComponent,
    CreateTaskComponent,
    TareasComponent,
    BorrarComponent,
    ActualizarComponent,
    Erro404Component,
    SeeTasksComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule,HttpClientModule,NgChartsModule],
  providers: [TareaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
