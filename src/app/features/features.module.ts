import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { FighterDetailComponent } from './fighter-detail/fighter-detail.component';



@NgModule({
  declarations: [
    HomeComponent,
    InfoComponent,
    FighterDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FeaturesModule { }
