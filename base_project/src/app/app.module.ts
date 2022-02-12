import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './pages/home/home-component/home-component.component';
import { Error404Component } from './error404/error404.component';
import { DomenicoComponent } from './domenico/domenico.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { DescripcionComponent } from './components/descripcion/descripcion.component';
import { ProductosComponent } from './components/productos/productos.component';
import { SeparacionComponent } from './components/separacion/separacion.component';
import { FooterComponent } from './components/footer/footer.component';
import { PujasComponent } from './pages/pujas/pujas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    Error404Component,
    DomenicoComponent,
    CabeceraComponent,
    DescripcionComponent,
    ProductosComponent,
    SeparacionComponent,
    FooterComponent,
    PujasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
