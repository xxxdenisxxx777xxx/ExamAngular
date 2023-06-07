import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApodComponent } from './Apod/apod.component';
import { AsteroidComponent } from './Asteroid/asteroid.component';
import { EarthComponent } from './Earth/earth.component';
import { MarsComponent } from './Mars/mars.component';
import { EpicComponent } from './EPIC/epic.component';
import { ApiComponent } from './API/api.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [ { path: 'apod-component', component: ApodComponent , canActivate: [AuthGuard]},
{path: 'asteroid-component', component: AsteroidComponent, canActivate: [AuthGuard]},
{path: 'earth-component', component: EarthComponent , canActivate: [AuthGuard]},
{path: 'mars-component', component: MarsComponent , canActivate: [AuthGuard]},
{path: 'epic-component', component: EpicComponent , canActivate: [AuthGuard]},
{path:'api-component', component: ApiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
