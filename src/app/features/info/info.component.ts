import { Component, OnInit } from '@angular/core';
import { FightersService } from 'src/app/core/services/fighters.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor(private fightersService: FightersService) { }

  ngOnInit(): void {
  }

  public logFighterServiceData(): void {
    console.log('fighter service data -> ', this.fightersService.fighters);
  }

}
