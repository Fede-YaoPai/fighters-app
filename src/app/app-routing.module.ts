import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FighterDetailComponent } from './features/fighter-detail/fighter-detail.component';
import { HomeComponent } from './features/home/home.component';
import { InfoComponent } from './features/info/info.component';
import { AppRoutes } from './models/constants';

const routes: Routes = [
  {path: '', redirectTo: AppRoutes.Home, pathMatch: 'full'},
  {path: AppRoutes.Home, component: HomeComponent},
  {path: 'fighters/:id', component: FighterDetailComponent},
  {path: AppRoutes.Info, component: InfoComponent},
  {path: '**', redirectTo: AppRoutes.Home, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
