import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApodComponent } from './Apod/apod.component';
import { AsteroidComponent } from './Asteroid/asteroid.component';
import { EarthComponent } from './Earth/earth.component';
import { MarsComponent } from './Mars/mars.component';
import { EpicComponent } from './EPIC/epic.component';
import { ApiComponent } from './API/api.component';

@NgModule({
  declarations: [
    AppComponent,
    ApodComponent,
    AsteroidComponent,
    EarthComponent,
    MarsComponent,
    EpicComponent,
    ApiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
