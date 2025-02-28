import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TownshipComponent } from './township/township.component';
import { ButtonComponent } from './button/button.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'township', component: TownshipComponent },
  { path: 'button', component: ButtonComponent },
];
