import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './pages/home/home-component/home-component.component';
import { Error404Component } from './error404/error404.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { DescripcionComponent } from './components/descripcion/descripcion.component';
import { ProductosComponent } from './components/productos/productos.component';
import { SeparacionComponent } from './components/separacion/separacion.component';
import { FooterComponent } from './components/footer/footer.component';
import { PujasComponent } from './pages/pujas/pujas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TareasComponent } from './components/tareas/tareas.component';
import { TareaService } from './services/tarea.service';
import { Pagina2Component } from './pages/pagina2/pagina2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    Error404Component,
    CabeceraComponent,
    DescripcionComponent,
    ProductosComponent,
    SeparacionComponent,
    FooterComponent,
    PujasComponent,
    TareasComponent,
    Pagina2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [TareaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
