import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Fighter } from '../../../models/fighters.models';

@Component({
  selector: 'app-fighter-card',
  templateUrl: './fighter-card.component.html',
  styleUrls: ['./fighter-card.component.scss']
})
export class FighterCardComponent implements OnInit {

  @Input()
  public fighter!: Fighter;

  @Output()
  public buttonClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public onClick(fighterId: string): void {
    this.buttonClicked.emit(fighterId);
  }

}
