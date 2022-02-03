import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyComponentComponent } from './components/empty-component/empty-component.component';
import { HomeComponentComponent } from './pages/home/home-component/home-component.component';
import { SubastasComponent } from './subastas/subastas.component';
import { Error404Component } from './error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyComponentComponent,
    HomeComponentComponent,
    SubastasComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
