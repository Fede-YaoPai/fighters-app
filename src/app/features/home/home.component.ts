import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FightersService } from 'src/app/core/services/fighters.service';
import { Fighter } from 'src/app/models/fighters.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public fighters: Fighter[] = [];
  public simpleButtonText: string = 'Get all fighters';

  public showGetFightersButton: boolean = true;

  constructor(
    private fighterService: FightersService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public getFighters(): void {
    this.fighterService.getAllFighters().subscribe({
      next: (fighters: Fighter[]) => {
        this.fighterService.fighters = fighters;
        this.fighters = fighters;
      },
      error: (err) => {console.log('error -> ', err)},
      complete: () => {console.log('Observable complete!')}
    });
  }

  public toggleGetFightersButton(show: boolean): void {
    this.showGetFightersButton = show;
  }

  public goToFighterDetails(fighterId: string): void {
    this.router.navigateByUrl(`fighters/${fighterId}`);
  }

}
