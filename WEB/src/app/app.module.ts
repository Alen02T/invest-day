import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './pages/home/home-component/home-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './services/book.service';
import { NgChartsModule } from 'ng2-charts';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { SectionComponent } from './components/section/section.component';
import { LastActivitiesComponent } from './components/last-activities/last-activities.component';
import { SugerenciasComponent } from './components/sugerencias/sugerencias.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    CabeceraComponent,
    SectionComponent,
    LastActivitiesComponent,
    SugerenciasComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule,HttpClientModule,NgChartsModule],
  providers: [BookService],
  bootstrap: [AppComponent],
})
export class AppModule {}
