import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleButtonComponent } from './components/simple-button/simple-button.component';
import { FighterCardComponent } from './components/fighter-card/fighter-card.component';


const sharedComponents = [
  SimpleButtonComponent,
  FighterCardComponent
];

@NgModule({
  declarations: sharedComponents,
  imports: [
    CommonModule
  ],
  exports: sharedComponents
})
export class SharedModule { }
