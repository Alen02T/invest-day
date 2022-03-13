import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './pages/home/home-component/home-component.component';
import { Error404Component } from './error404/error404.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TareasComponent } from './components/tareas/tareas.component';
import { TareaService } from './services/tarea.service';
import { BorrarComponent } from './pages/borrar/borrar.component';
import { ActualizarComponent } from './pages/actualizar/actualizar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    Error404Component,
    TareasComponent,
    BorrarComponent,
    ActualizarComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, ReactiveFormsModule,HttpClientModule
  ],
  providers: [TareaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
