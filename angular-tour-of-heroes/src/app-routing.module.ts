import { NgModule } from '@angular/core';
import { HeroDetailComponent } from './app/hero-detail/hero-detail.component';

import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './app/heroes/heroes.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';


const routes:Routes=[
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path:'heroes', component:HeroesComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'detail/:id', component: HeroDetailComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]


})
export class AppRoutingModule { }
